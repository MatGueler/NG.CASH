export function config(token: string | null) {
  return {
    headers: {
      Authorization: `Authorization ${token}`,
    },
  };
}
