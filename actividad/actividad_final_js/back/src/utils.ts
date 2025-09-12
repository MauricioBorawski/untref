export const parseReqParams = (userId: unknown): number | null => {
  if (typeof userId === "number" && !isNaN(userId)) {
    return userId;
  }

  if (typeof userId === "string") {
    const parsed = Number(userId);
    if (!isNaN(parsed)) {
      return parsed;
    }
  }

  return null;
};
