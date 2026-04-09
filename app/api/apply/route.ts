import { NextRequest, NextResponse } from "next/server";
import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";
import { SNSClient, PublishCommand } from "@aws-sdk/client-sns";

const AWS_CONFIG = {
  region: (process.env.AWS_REGION ?? "us-east-2").trim(),
  credentials: {
    accessKeyId: (process.env.AWS_ACCESS_KEY_ID ?? "").trim(),
    secretAccessKey: (process.env.AWS_SECRET_ACCESS_KEY ?? "").trim(),
  },
};

const ses = new SESClient(AWS_CONFIG);
const sns = new SNSClient(AWS_CONFIG);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, goal, experience, message } = body;

    if (!name || !email || !goal) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const emailBody = `
New FLX by Kia Application

Name: ${name}
Email: ${email}
Phone: ${phone || "Not provided"}
Goal: ${goal}
Experience Level: ${experience || "Not specified"}
Message: ${message || "None"}

Submitted: ${new Date().toLocaleString("en-US", { timeZone: "America/Chicago" })}
    `.trim();

    const smsBody = `FLX by Kia — New application from ${name}. Goal: ${goal}. Email: ${email}. Phone: ${phone || "N/A"}`;

    // Send email via SES
    await ses.send(
      new SendEmailCommand({
        Source: "noreply@steadyscaling.com",
        Destination: { ToAddresses: [(process.env.NOTIFY_EMAIL ?? "").trim()] },
        Message: {
          Subject: { Data: `FLX Application: ${name} — ${goal}` },
          Body: { Text: { Data: emailBody } },
        },
      })
    );

    // Send SMS via SNS
    await sns.send(
      new PublishCommand({
        PhoneNumber: (process.env.NOTIFY_PHONE ?? "").trim(),
        Message: smsBody,
        MessageAttributes: {
          "AWS.MM.SMS.OriginationNumber": {
            DataType: "String",
            StringValue: process.env.SNS_ORIGINATION_NUMBER ?? "",
          },
        },
      })
    );

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Apply API error:", err);
    return NextResponse.json({ error: "Submission failed" }, { status: 500 });
  }
}
