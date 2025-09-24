import { PageProps } from "$fresh/server.ts";

export default function Layout({ Component, state }: PageProps) {
  // do something with state here
  return (
    <div class="layout">  
      
        <div>
            <button><a href="/wordcsr">Client Side</a></button>
            <button><a href="/serverssr">Server Side</a></button>
        </div>
      <Component />
    </div>
  );
}