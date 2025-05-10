import { Injectable } from '@nestjs/common';
import { S3Client, PutObjectCommand, ListObjectsV2Command, GetObjectCommand } from '@aws-sdk/client-s3';
import { Readable } from 'stream';
import * as crypto from 'crypto';

@Injectable()
export class LogService {
  private s3: S3Client;

  constructor() {
    this.s3 = new S3Client({
      region: process.env.AWS_REGION,
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
      },
    });
  }

  async saveLog(content: Record<string, any>) {
    const bucket = process.env.S3_BUCKET_NAME!;
    const key = `logs/${Date.now()}-${crypto.randomUUID()}.json`;

    const command = new PutObjectCommand({
      Bucket: bucket,
      Key: key,
      Body: JSON.stringify(content, null, 2),
      ContentType: 'application/json',
    });

    await this.s3.send(command);
    console.log(`✅ Log salvo no S3: ${key}`);
  }

  async listLogs(): Promise<string[]> {
    const bucket = process.env.S3_BUCKET_NAME!;
    const command = new ListObjectsV2Command({
      Bucket: bucket,
      Prefix: 'logs/',
    });
  
    const response = await this.s3.send(command);
    return (
      response.Contents?.map((obj) => obj.Key!).filter(Boolean) || []
    );
  }

  async getLog(key: string) {
    const bucket = process.env.S3_BUCKET_NAME!;
    const command = new GetObjectCommand({ Bucket: bucket, Key: key });
    const response = await this.s3.send(command);
  
    const streamToString = (stream: Readable): Promise<string> =>
      new Promise((resolve, reject) => {
        const chunks: Uint8Array[] = [];
        stream.on('data', (chunk) => chunks.push(chunk));
        stream.on('end', () => resolve(Buffer.concat(chunks).toString('utf-8')));
        stream.on('error', reject);
      });
  
    const bodyContent = await streamToString(response.Body as Readable);
    return JSON.parse(bodyContent);
  }
}
