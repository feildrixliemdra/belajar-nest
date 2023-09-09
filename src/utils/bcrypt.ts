import * as bcrypt from 'bcrypt';

export function hashPassword(password: string): string {
  const salt = bcrypt.genSaltSync(10);

  const hash = bcrypt.hashSync(password, salt);

  return hash;
}

export async function isMatch(
  password,
  hashedPassword: string,
): Promise<boolean> {
  const isMatch = await bcrypt.compare(password, hashedPassword);

  return isMatch;
}
