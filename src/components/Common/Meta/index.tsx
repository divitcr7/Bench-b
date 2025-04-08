import { useEffect } from "react";

import {MetaType} from "@/interfaces"

export default function MetaComponent({ meta }: { meta: MetaType }) {
  useEffect(() => {
    document.title = meta.title;

    // selecting existing meta tag
    let metaTag = document.querySelector(
      'meta[name="description"]'
    ) as HTMLMetaElement | null;

    if (metaTag) {
      metaTag.content = meta.description;
    } else {
      metaTag = document.createElement("meta") as HTMLMetaElement;
      metaTag.name = "description";
      metaTag.content = meta.description;
      document.head.appendChild(metaTag);
    }
  }, [meta]);

  return null;
}
