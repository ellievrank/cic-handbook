import { c as createComponent, m as maybeRenderHead, b as renderTemplate, r as renderComponent, l as createVNode, h as Fragment, _ as __astro_tag_component__ } from './astro/server_0r96vtOq.mjs';
import { a as $$LinkButton } from './Code_DwmmcRIC.mjs';
import 'piccolore';
import 'clsx';
/* empty css                          */

const $$SupportServicesGrid = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="mt-6 mb-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"> <div class="flex flex-col gap-2 rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-rose-200 hover:shadow-lg"> <h3 class="m-0 text-lg font-bold text-[#78081c]">Victims of Crime Helpline</h3> <a href="tel:1800819817" class="mb-2 inline-block text-lg font-bold text-gray-900 no-underline transition hover:text-[#78081c] hover:underline">
📞 1800 819 817
</a> <p class="m-0 text-sm text-gray-600">Free, confidential support and referrals for victims of crime across Australia.</p> </div> <div class="flex flex-col gap-2 rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-rose-200 hover:shadow-lg"> <h3 class="m-0 text-lg font-bold text-[#78081c]">1800RESPECT</h3> <a href="tel:1800737732" class="mb-2 inline-block text-lg font-bold text-gray-900 no-underline transition hover:text-[#78081c] hover:underline">
📞 1800 737 732
</a> <p class="m-0 text-sm text-gray-600">
24/7 counselling and support for people affected by sexual assault, family violence, or domestic violence.
</p> </div> <div class="flex flex-col gap-2 rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-rose-200 hover:shadow-lg"> <h3 class="m-0 text-lg font-bold text-[#78081c]">Lifeline</h3> <a href="tel:131114" class="mb-2 inline-block text-lg font-bold text-gray-900 no-underline transition hover:text-[#78081c] hover:underline">
📞 13 11 14
</a> <p class="m-0 text-sm text-gray-600">24/7 crisis support for anyone experiencing emotional distress.</p> </div> <div class="flex flex-col gap-2 rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-rose-200 hover:shadow-lg"> <h3 class="m-0 text-lg font-bold text-[#78081c]">13YARN</h3> <a href="tel:139276" class="mb-2 inline-block text-lg font-bold text-gray-900 no-underline transition hover:text-[#78081c] hover:underline">
📞 13 92 76
</a> <p class="m-0 text-sm text-gray-600">
24/7 culturally safe crisis support for Aboriginal and Torres Strait Islander peoples.
</p> </div> <div class="flex flex-col gap-2 rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-rose-200 hover:shadow-lg"> <h3 class="m-0 text-lg font-bold text-[#78081c]">Relationships Australia</h3> <a href="tel:1300364277" class="mb-2 inline-block text-lg font-bold text-gray-900 no-underline transition hover:text-[#78081c] hover:underline">
📞 1300 364 277
</a> <p class="m-0 text-sm text-gray-600">Counselling and support for individuals, families, and relationships.</p> </div> </div>`;
}, "/Users/ellievrankovich/projects/cic-handbook/src/components/services/SupportServicesGrid.astro", void 0);

const $$LegalHelpCard = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="mt-8 mb-8 flex flex-col items-center gap-6 rounded-xl border border-slate-200 bg-slate-50 p-8 text-center shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-lg md:flex-row md:items-start md:p-10 md:text-left"> <div class="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-white text-2xl shadow-md"> <span>⚖️</span> </div> <div class="space-y-2"> <h3 class="m-0 text-xl font-bold text-slate-800">Need free legal advice?</h3> <p class="m-0 max-w-xl text-base leading-relaxed text-slate-600">
Community Legal Centres (CLCs) provide free or low-cost legal help to people who cannot afford a private lawyer. They can
      assist with advice, referrals, and sometimes representation.
</p> </div> <div class="md:ml-auto md:self-center"> ${renderComponent($$result, "LinkButton", $$LinkButton, { "href": "https://clcs.org.au/legal-help/", "variant": "primary", "icon": "external", "class": "inline-flex items-center justify-center" }, { "default": ($$result2) => renderTemplate`
Find a Legal Centre
` })} </div> </div>`;
}, "/Users/ellievrankovich/projects/cic-handbook/src/components/services/LegalHelpCard.astro", void 0);

const frontmatter = {
  "title": "Support Services",
  "description": "Confidential support services for victims of crime.",
  "template": "splash",
  "hero": {
    "tagline": "You do not need to make a claim to access help."
  },
  "previous": {
    "link": "/",
    "label": "Home"
  }
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "national-support-services",
    "text": "National support services"
  }, {
    "depth": 2,
    "slug": "state-and-local-services",
    "text": "State and local services"
  }, {
    "depth": 2,
    "slug": "legal-help",
    "text": "Legal help"
  }];
}
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode(Fragment$1, {
      "set:html": "<aside aria-label=\"In an emergency\" class=\"starlight-aside starlight-aside--danger\"><p class=\"starlight-aside__title\" aria-hidden=\"true\"><svg viewBox=\"0 0 24 24\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"starlight-aside__icon\"><path d=\"M12 7C11.7348 7 11.4804 7.10536 11.2929 7.29289C11.1054 7.48043 11 7.73478 11 8V12C11 12.2652 11.1054 12.5196 11.2929 12.7071C11.4804 12.8946 11.7348 13 12 13C12.2652 13 12.5196 12.8946 12.7071 12.7071C12.8946 12.5196 13 12.2652 13 12V8C13 7.73478 12.8946 7.48043 12.7071 7.29289C12.5196 7.10536 12.2652 7 12 7ZM12 15C11.8022 15 11.6089 15.0586 11.4444 15.1685C11.28 15.2784 11.1518 15.4346 11.0761 15.6173C11.0004 15.8 10.9806 16.0011 11.0192 16.1951C11.0578 16.3891 11.153 16.5673 11.2929 16.7071C11.4327 16.847 11.6109 16.9422 11.8049 16.9808C11.9989 17.0194 12.2 16.9996 12.3827 16.9239C12.5654 16.8482 12.7216 16.72 12.8315 16.5556C12.9414 16.3911 13 16.1978 13 16C13 15.7348 12.8946 15.4804 12.7071 15.2929C12.5196 15.1054 12.2652 15 12 15ZM21.71 7.56L16.44 2.29C16.2484 2.10727 15.9948 2.00368 15.73 2H8.27C8.00523 2.00368 7.75163 2.10727 7.56 2.29L2.29 7.56C2.10727 7.75163 2.00368 8.00523 2 8.27V15.73C2.00368 15.9948 2.10727 16.2484 2.29 16.44L7.56 21.71C7.75163 21.8927 8.00523 21.9963 8.27 22H15.73C15.9948 21.9963 16.2484 21.8927 16.44 21.71L21.71 16.44C21.8927 16.2484 21.9963 15.9948 22 15.73V8.27C21.9963 8.00523 21.8927 7.75163 21.71 7.56ZM20 15.31L15.31 20H8.69L4 15.31V8.69L8.69 4H15.31L20 8.69V15.31Z\"></path></svg>In an emergency</p><div class=\"starlight-aside__content\"><p><strong>If you or someone else is in immediate danger, call Triple Zero (000).</strong></p></div></aside>\n<p>If you are affected by crime, confidential support is available. These services can provide counselling, information, referrals, and emotional support at any stage of the criminal injuries compensation process.</p>\n<p><strong>You do not need to be making a compensation claim to access these services.</strong></p>\n<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"national-support-services\">National support services</h2><a class=\"sl-anchor-link\" href=\"#national-support-services\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “National support services”</span></a></div>\n"
    }), createVNode($$SupportServicesGrid, {}), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"state-and-local-services\">State and local services</h2><a class=\"sl-anchor-link\" href=\"#state-and-local-services\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “State and local services”</span></a></div>\n<p>Each state and territory also offers its own victim support services, counselling programs, and referral networks. These services may provide additional assistance tailored to local systems and communities.</p>\n<p>If you are unsure which service is right for you, a national helpline can help connect you to appropriate local support.</p>\n<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"legal-help\">Legal help</h2><a class=\"sl-anchor-link\" href=\"#legal-help\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Legal help”</span></a></div>\n"
    }), createVNode($$LegalHelpCard, {})]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
function _missingMdxReference(id, component) {
  throw new Error("Expected " + ("component" ) + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}

const url = "src/content/docs/support-services/index.mdx";
const file = "/Users/ellievrankovich/projects/cic-handbook/src/content/docs/support-services/index.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/ellievrankovich/projects/cic-handbook/src/content/docs/support-services/index.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
