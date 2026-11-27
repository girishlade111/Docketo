import { describe, expect, it } from "vitest";
import { NextRequest } from "next/server";
import { POST } from "@/app/api/contact/route";

function makeRequest(body: unknown, ip = "127.0.0.10") {
  return new NextRequest("http://127.0.0.1:3000/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-forwarded-for": ip,
    },
    body: JSON.stringify(body),
  });
}

describe("POST /api/contact", () => {
  it("accepts a valid demonstration contact submission", async () => {
    const res = await POST(
      makeRequest({
        firstName: "Ava",
        lastName: "Patel",
        email: "ava@example-fintech.test",
        companyName: "Northbridge Ledger",
        jobTitle: "Head of Platform",
        phoneNumber: "+44 20 7946 0000",
        message: "Evaluating embedded accounts for our treasury ledger.",
      })
    );
    expect(res.status).toBe(200);
    const data = await res.json();
    expect(data.ok).toBe(true);
    expect(data.mode).toBe("demo");
    expect(typeof data.message).toBe("string");
  });

  it("rejects missing required fields with 400", async () => {
    const res = await POST(
      makeRequest({
        firstName: "",
        lastName: "Patel",
        email: "not-an-email",
        companyName: "",
        message: "Hi",
      })
    );
    expect(res.status).toBe(400);
    const data = await res.json();
    expect(typeof data.error).toBe("string");
  });

  it("rejects invalid JSON payloads gracefully", async () => {
    const req = new NextRequest("http://127.0.0.1:3000/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-forwarded-for": "127.0.0.11",
      },
      body: "{bad-json",
    });
    const res = await POST(req);
    expect(res.status).toBe(400);
  });
});
