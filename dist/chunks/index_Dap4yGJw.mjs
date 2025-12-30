import { c as createComponent, m as maybeRenderHead, b as renderTemplate, f as addAttribute, r as renderComponent, l as createVNode, h as Fragment, _ as __astro_tag_component__ } from './astro/server_0r96vtOq.mjs';
import 'piccolore';
import 'clsx';
/* empty css                          */
import { a as $$LinkButton } from './Code_DwmmcRIC.mjs';

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="relative py-12 md:py-32 overflow-hidden bg-white"> <div class="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center"> <h1 class="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 leading-[1.1]">
Understand criminal injuries compensation across Australia
<span class="block text-[#78081C] mt-2">with clarity and confidence</span> </h1> <p class="mt-4 text-lg md:text-xl text-slate-600 max-w-3xl leading-relaxed">
The CIC Toolkit is a practical, plain-language resource designed to help
      victims of crime understand criminal injuries compensation, their
      eligibility, and what compensation can cover. It guides people step by
      step through the process, explaining time limits, evidence, applications,
      and support services so they can make informed decisions and seek help
      with confidence.
</p> <div class="mt-10 flex justify-center gap-4"> <a href="#jurisdictions" class="inline-flex items-center justify-center
          bg-[#78081C] text-white
          hover:bg-[#5a0615]
          px-8 py-4
          rounded-full
          text-lg font-bold
          transition-all duration-200
          hover:-translate-y-1 hover:shadow-lg
          no-underline">
Select your location
</a> </div> </div> </section>`;
}, "/Users/ellievrankovich/projects/cic-handbook/src/components/home/Hero.astro", void 0);

const $$JurisdictionGrid = createComponent(($$result, $$props, $$slots) => {
  const jurisdictions = [
    { name: "Western Australia", href: "/wa-guide", active: true },
    { name: "Victoria", href: "#", active: false },
    { name: "New South Wales", href: "#", active: false },
    { name: "Queensland", href: "#", active: false },
    { name: "South Australia", href: "#", active: false },
    { name: "Tasmania", href: "#", active: false },
    { name: "Northern Territory", href: "#", active: false },
    { name: "ACT", href: "#", active: false }
  ];
  return renderTemplate`${maybeRenderHead()}<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10"> ${jurisdictions.map((state) => renderTemplate`<a${addAttribute(state.active ? state.href : void 0, "href")}${addAttribute(`
          flex flex-col justify-center min-h-40 p-8 rounded-lg no-underline shadow-md border transition-all duration-200 ease-in-out
          ${state.active ? "bg-white border-gray-200 hover:-translate-y-1 hover:shadow-lg hover:border-[#78081c]" : "bg-gray-50 border-gray-100 cursor-default opacity-80"}
        `, "class")}> <div> <h3${addAttribute(`
            text-xl font-bold mt-0 mb-4
            ${state.active ? "text-[#78081c]" : "text-gray-400"}
          `, "class")}> ${state.name} </h3> ${state.active ? renderTemplate`<span class="text-2xl text-[#78081c] font-bold">➔</span>` : renderTemplate`<span class="inline-block bg-gray-200 text-gray-500 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
Coming Soon
</span>`} </div> </a>`)} </div>`;
}, "/Users/ellievrankovich/projects/cic-handbook/src/components/home/JurisdictionGrid.astro", void 0);

const $$HomeCTA = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="mt-12 rounded-xl border border-rose-200 bg-rose-50 px-6 py-8 text-center"> <h3 class="mt-0 text-xl font-extrabold text-[#78081c] mb-2">
Need immediate help or support?
</h3> <p class="mb-6 text-gray-600">Find confidential support services available in your area.</p> ${renderComponent($$result, "LinkButton", $$LinkButton, { "href": "/support-services", "variant": "primary", "icon": "external", "class": "inline-flex items-center justify-center" }, { "default": ($$result2) => renderTemplate`
Explore Support Services
` })} </div>`;
}, "/Users/ellievrankovich/projects/cic-handbook/src/components/home/HomeCTA.astro", void 0);

const frontmatter = {
  "title": "The Criminal Injuries Compensation Guide",
  "description": "A clear, plain-English guide to CIC in Western Australia.",
  "template": "splash",
  "next": {
    "link": "/wa-guide",
    "label": "Western Australia Guide"
  }
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  return createVNode(Fragment, {
    children: [createVNode($$Hero, {}), "\n", createVNode("div", {
      id: "jurisdictions",
      children: createVNode($$JurisdictionGrid, {})
    }), "\n", createVNode($$HomeCTA, {})]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent();
}

const url = "src/content/docs/index.mdx";
const file = "/Users/ellievrankovich/projects/cic-handbook/src/content/docs/index.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/ellievrankovich/projects/cic-handbook/src/content/docs/index.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
