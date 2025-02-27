import { Helmet, HelmetProvider } from "react-helmet-async";

interface MetaType{
    title:string;
    description:string
}

export default function MetaComponent({ meta }: { meta: MetaType }) {
  return (
    <HelmetProvider>
      <Helmet>
        <title>{meta?.title}</title>
        <meta name="description" content={meta?.description} />
      </Helmet>
    </HelmetProvider>
  );
}
