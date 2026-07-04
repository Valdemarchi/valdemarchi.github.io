"use client";

import { useState } from "react";
import GalleryItem from "./GalleryItem";

export default function GalleryClient({ items }: any) {
  const [list, setList] = useState(items || []);

  function handleUpdate(updated: any) {
    setList((prev: any) =>
      prev.map((item: any) =>
        item.id === updated.id ? updated : item
      )
    );
  }

  function handleDelete(id: string) {
    setList((prev: any) =>
      prev.filter((item: any) => item.id !== id)
    );
  }

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
      {list.map((item: any) => (
        <GalleryItem
          key={item.id}
          item={item}
          onUpdate={handleUpdate}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
}