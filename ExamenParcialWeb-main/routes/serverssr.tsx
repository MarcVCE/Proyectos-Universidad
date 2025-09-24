import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";

export const handler: Handlers = {
  GET(_req: Request, _ctx: FreshContext) {
    return new Response("Not implemented");
  },
};

export const serverssr = (_props: PageProps) => {
  return (
    <div></div>
  )
}
