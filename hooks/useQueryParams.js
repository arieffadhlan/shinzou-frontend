import { useSearchParams } from "next/navigation";

const useQueryParams = (data) => {
  const searchParams = useSearchParams();

  const params = new URLSearchParams(searchParams);
  for (let [key, value] of Object.entries(data)) {
    if (value) params.set(key, value);
  }

  return params.toString();
}

export default useQueryParams;