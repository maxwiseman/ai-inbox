"use client";

import { Input } from "@ai-inbox/ui/input";
import { useQueryState } from "nuqs";

export function SearchInput(): React.ReactElement {
  const [searchValue, setSearchValue] = useQueryState("query");

  return (
    <Input
      placeholder="Search..."
      value={searchValue ?? ""}
      onChange={(e) => setSearchValue(e.target.value || null)}
    />
  );
}
