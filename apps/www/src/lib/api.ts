import { getParams } from "./url";

export const ogImageApi = ({ title }: { title: string }) =>
  encodeURI(
    `/api/og?${getParams({
      title,
    })}`,
  );
