import { lazy } from "react";
import { PROJECT_META_BY_SLUG } from "../data/projectMeta";

const PROJECT_DETAIL_COMPONENTS = {
  "smart-market": lazy(() => import("./SmartMarketDetail")),
  "tardydevs": lazy(() => import("./TardyDevsDetail")),
  "layerit": lazy(() => import("./LayerItDetail")),
  "buddy": lazy(() => import("./BuddyDetail")),
  "phastor": lazy(() => import("./PhastorDetail")),
  "teki": lazy(() => import("./TekiDetail")),
};

export function getProjectRouteConfig(slug) {
  const metadata = PROJECT_META_BY_SLUG[slug];
  if (!metadata) return null;

  return {
    ...metadata,
    Component: PROJECT_DETAIL_COMPONENTS[slug],
  };
}
