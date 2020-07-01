import { User } from "../models/user.ts";

export const fetchData = async (): Promise<User[]> => {
    const data = await Deno.readFile('./db/users.json');

    const decoder = new TextDecoder();
    const decodedData = decoder.decode(data);

    return JSON.parse(decodedData);
};

export const persistData = async (data: any): Promise<void> => {
    const encoder = new TextEncoder();
    await Deno.writeFile('./db/users.json', encoder.encode(JSON.stringify(data)));
};
