export class CryptoName {
  name: string;
  id: number;

  constructor(CryText: string, CryId: number) {
    this.name = CryText;
    this.id = CryId;
  }
}
export class UserName {
  name: string;

  constructor(userName: string) {
    this.name = userName;
  }
}
