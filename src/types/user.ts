export type UserStatus = "Active" | "Inactive" | "Pending" | "Blacklisted";

export interface User {
  id: string;
  organization: string;
  username: string;
  email: string;
  phoneNumber: string;
  dateJoined: string;
  status: UserStatus | string;
}
export interface UserDetail {
  id: string;
  username: string;
  organization: string;
  amount: string;
  bank: string;
  accountNumber: string;
  email: string;
  phoneNumber: string;
  dateJoined: string;
  status: "Active" | "Inactive" | "Pending" | "Blacklisted";
  bvn: string;
  gender: string;
  maritalStatus: string;
  children: string;
  residence: string;
  education: {
    level: string;
    status: string;
    sector: string;
    duration: string;
    income: string;
    repayment: string;
    officeEmail: string;
  };
  socials: {
    twitter: string;
    facebook: string;
    instagram: string;
  };
  guarantors: {
    name: string;
    email: string;
    phoneNumber: string;
    relationship: string;
  }[];
}
