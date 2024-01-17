import { requestInstance } from './instance';

export async function getGames() {
  const data = await requestInstance('/game/gameAddress', 'GET');
  return (data as any)?.data;
}
