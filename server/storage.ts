import { type User, type InsertUser, type ContactSubmission, type InsertContactSubmission, type InquirySubmission, type InsertInquirySubmission } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission>;
  createInquirySubmission(submission: InsertInquirySubmission): Promise<InquirySubmission>;
  getContactSubmissions(): Promise<ContactSubmission[]>;
  getInquirySubmissions(): Promise<InquirySubmission[]>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private contactSubmissions: Map<string, ContactSubmission>;
  private inquirySubmissions: Map<string, InquirySubmission>;

  constructor() {
    this.users = new Map();
    this.contactSubmissions = new Map();
    this.inquirySubmissions = new Map();
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission> {
    const id = randomUUID();
    const contactSubmission: ContactSubmission = {
      ...submission,
      id,
      createdAt: new Date(),
    };
    this.contactSubmissions.set(id, contactSubmission);
    return contactSubmission;
  }

  async createInquirySubmission(submission: InsertInquirySubmission): Promise<InquirySubmission> {
    const id = randomUUID();
    const inquirySubmission: InquirySubmission = {
      ...submission,
      id,
      createdAt: new Date(),
    };
    this.inquirySubmissions.set(id, inquirySubmission);
    return inquirySubmission;
  }

  async getContactSubmissions(): Promise<ContactSubmission[]> {
    return Array.from(this.contactSubmissions.values()).sort(
      (a, b) => (b.createdAt?.getTime() || 0) - (a.createdAt?.getTime() || 0)
    );
  }

  async getInquirySubmissions(): Promise<InquirySubmission[]> {
    return Array.from(this.inquirySubmissions.values()).sort(
      (a, b) => (b.createdAt?.getTime() || 0) - (a.createdAt?.getTime() || 0)
    );
  }
}

export const storage = new MemStorage();
