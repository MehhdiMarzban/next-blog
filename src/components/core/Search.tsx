"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function Search() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  function onSubmit(e) {
    e.preventDefault();

    const val = e.target;
    const search = val.search;
    const newParams = new URLSearchParams(searchParams.toString());
    newParams.set("page", "1");
    if (search.value) {
      newParams.set("q", search.value);
    } else {
      newParams.delete("q");
    }

    // console.log(search.value);
    // router.push(createUrl("/search", newParams));
    router.push(`${pathname}?${newParams.toString()}`, { scroll: false });

    // router.push(pathname + "?" + newParams.toString());
  }

  return (
    <form onSubmit={onSubmit} className="relative">
      <input
        key={searchParams?.get("q")}
        type="text"
        name="search"
        placeholder="جستجو ..."
        autoComplete="off"
        defaultValue={searchParams?.get("q") ?? ""}
        className="textField__input py-3 text-xs bg-secondary-0"
      />
      <button
        type="submit"
        className="absolute left-0 top-0 ml-3 flex h-full items-center"
      >
        <MagnifyingGlassIcon className="h-4 text-secondary-400" />
      </button>
    </form>
  );
}


