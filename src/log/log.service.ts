// src/log/log.service.ts
import { Injectable } from '@nestjs/common';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
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
}
