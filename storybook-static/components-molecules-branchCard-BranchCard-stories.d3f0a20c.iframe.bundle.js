"use strict";(self.webpackChunkrestaurant_app=self.webpackChunkrestaurant_app||[]).push([[1],{"./src/components/molecules/branchCard/BranchCard.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>BranchCard_stories});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),injectStylesIntoStyleTag=(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),BranchCard_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/components/molecules/branchCard/BranchCard.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(BranchCard_module.A,options);const branchCard_BranchCard_module=BranchCard_module.A&&BranchCard_module.A.locals?BranchCard_module.A.locals:void 0;var next_image=__webpack_require__("./node_modules/@storybook/nextjs/dist/images/next-image.mjs"),InfoCard=__webpack_require__("./src/components/atoms/infoCard/InfoCard.tsx"),next_link=__webpack_require__("./node_modules/next/link.js"),link_default=__webpack_require__.n(next_link);const BranchCard=({name,address,time,tel,location})=>(0,jsx_runtime.jsx)("div",{className:branchCard_BranchCard_module["branch-card"],children:(0,jsx_runtime.jsxs)("div",{className:branchCard_BranchCard_module["branch-card__info"],children:[(0,jsx_runtime.jsx)("h3",{className:branchCard_BranchCard_module["branch-card__info__name"],children:name}),(0,jsx_runtime.jsx)("p",{className:branchCard_BranchCard_module["branch-card__info__address"],children:address}),(0,jsx_runtime.jsxs)("div",{className:branchCard_BranchCard_module["branch-card__info__info_block"],children:[(0,jsx_runtime.jsx)(InfoCard.A,{icon:(0,jsx_runtime.jsx)(next_image.A,{src:"/icons/watch.svg",alt:"Watch",width:20,height:20,className:branchCard_BranchCard_module["branch-card__info__info_block__icon"]}),title:time}),(0,jsx_runtime.jsx)(InfoCard.A,{icon:(0,jsx_runtime.jsx)(next_image.A,{src:"/icons/phone.svg",alt:"Phone",width:20,height:20,className:branchCard_BranchCard_module["branch-card__info__info_block__icon"]}),title:tel})]}),(0,jsx_runtime.jsx)(link_default(),{href:location,className:branchCard_BranchCard_module["branch-card__info__location"],children:"Click to View Google Map"})]})}),branchCard_BranchCard=BranchCard;BranchCard.__docgenInfo={description:"",methods:[],displayName:"BranchCard",props:{name:{required:!0,tsType:{name:"string"},description:""},address:{required:!0,tsType:{name:"string"},description:""},time:{required:!0,tsType:{name:"string"},description:""},location:{required:!0,tsType:{name:"string"},description:""},tel:{required:!0,tsType:{name:"string"},description:""}}};const Default={args:{name:"Robert Food",address:"1986 Hilltop DriveBorger, TX 79007",time:"7.30 AM - 9.30 PM",tel:"+880 1630 225 015",location:"#"}},BranchCard_stories={title:"Molecules/BranchCard",component:branchCard_BranchCard,tags:["autodocs"],excludeStories:/.*Data$/,decorators:[Story=>(0,jsx_runtime.jsx)("div",{style:{backgroundColor:"#c33",padding:"20px",width:"400px"},children:(0,jsx_runtime.jsx)(Story,{})})]},__namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  args: {\n    name: "Robert Food",\n    address: "1986 Hilltop DriveBorger, TX 79007",\n    time: "7.30 AM - 9.30 PM",\n    tel: "+880 1630 225 015",\n    location: "#"\n  }\n}',...Default.parameters?.docs?.source}}}},"./src/components/atoms/infoCard/InfoCard.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>infoCard_InfoCard});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),injectStylesIntoStyleTag=(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),InfoCard_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/components/atoms/infoCard/InfoCard.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(InfoCard_module.A,options);const infoCard_InfoCard_module=InfoCard_module.A&&InfoCard_module.A.locals?InfoCard_module.A.locals:void 0,InfoCard=({icon,title})=>(0,jsx_runtime.jsxs)("article",{className:infoCard_InfoCard_module["info-card"],children:[(0,jsx_runtime.jsx)("div",{className:infoCard_InfoCard_module["info-card__icon"],children:(0,jsx_runtime.jsx)("div",{className:infoCard_InfoCard_module["info-card__icon__box"],children:icon})}),(0,jsx_runtime.jsx)("div",{className:infoCard_InfoCard_module["info-card__title"],children:title})]}),infoCard_InfoCard=InfoCard;InfoCard.__docgenInfo={description:"",methods:[],displayName:"InfoCard",props:{icon:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},title:{required:!0,tsType:{name:"union",raw:"string | React.ReactNode",elements:[{name:"string"},{name:"ReactReactNode",raw:"React.ReactNode"}]},description:""}}}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/components/atoms/infoCard/InfoCard.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".InfoCard_info-card__n26I6{align-items:center;display:flex;gap:15px}.InfoCard_info-card__icon__O0brr{align-items:center;display:flex;justify-content:center}.InfoCard_info-card__icon__box__i8Pvn{align-items:center;display:flex;justify-content:center}.InfoCard_info-card__title__5Ai8I{color:var(--info-card-text-color, #fff8ee);font-size:.75rem}","",{version:3,sources:["webpack://./src/components/atoms/infoCard/InfoCard.module.scss","webpack://./src/foundations/sass/_mixins.scss","webpack://./src/foundations/sass/_colors.scss","webpack://./src/foundations/sass/_variables.scss"],names:[],mappings:"AAGA,2BACE,kBAAA,CACA,YAAA,CACA,QAAA,CAEA,iCCKA,kBAAA,CACA,YAAA,CACA,sBAAA,CDJE,sCCEF,kBAAA,CACA,YAAA,CACA,sBAAA,CDCA,kCACE,0CEuBc,CFtBd,gBGsDI",sourcesContent:['@use "sass:map";\n@import "../../../foundations/sass/all";\n\n.info-card {\n  align-items: center;\n  display: flex;\n  gap: 15px;\n\n  &__icon {\n    @include center;\n\n    &__box {\n      @include center;\n    }\n  }\n\n  &__title {\n    color: $info-card-color;\n    font-size: $fs-xs;\n  }\n}\n','/* =============================================\n=            Mixins                           =\n============================================= */\n\n/**\n *\n * Helpful reusable function-like things that will be used to implement\n * styles for components.\n *\n */\n@use "sass:map";\n\n@mixin center {\n  align-items: center;\n  display: flex;\n  justify-content: center;\n}\n\n@mixin tablet {\n  @media (min-width: map.get($breakpoints, "md")) {\n    @content;\n  }\n}\n\n@mixin laptop {\n  @media (min-width: map.get($breakpoints, "lg")) {\n    @content;\n  }\n}\n\n@mixin desktop {\n  @media (min-width: map.get($breakpoints, "xl")) {\n    @content;\n  }\n}\n\n@mixin padding($space) {\n  padding: map.get($spacing, $space);\n}\n\n@mixin margin($space) {\n  margin: map.get($spacing, $space);\n}\n\n@mixin margin-bottom($space) {\n  margin-bottom: map.get($spacing, $space);\n}\n\n@mixin padding-horizontal($space) {\n  padding-left: map.get($spacing, $space);\n  padding-right: map.get($spacing, $space);\n}\n\n@mixin padding-vertical($space) {\n  padding-bottom: map.get($spacing, $space);\n  padding-top: map.get($spacing, $space);\n}\n',"/* =============================================\n=            Foundation - colors              =\n============================================= */\n\n/**\n * This file defines the actual colors that will be used for styling. They will default to the palette\n * we defined in the _variable.scss file. This is our default palette, and devs can override this\n * with their own variables.\n */\n\n/* =============================================\n=            Global text colors               =\n============================================= */\n// $body-text-color: var(--body-text-color, $dark) !default;\n// $body-bg-color: var(--body-bg-color, $white) !default;\n\n/* =============================================\n=                 Buttons                     =\n============================================= */\n$btn-primary-color: var(--btn-primary-color, $white-floral) !default;\n$btn-primary-bg: var(--btn-primary-bg, $primary-color) !default;\n\n/* =============================================\n=                 Navbar                      =\n============================================= */\n\n$navbar-color: var(--navbar-color, $secondary-color) !default;\n\n/* =============================================\n=                 DeliveryOrderCard            =\n============================================= */\n\n$delivery-order-card-color: var(\n  --delivery-order-card-color,\n  $secondary-color\n) !default;\n\n/* =============================================\n=                 InfoCard                  =\n============================================= */\n$info-card-color: var(--info-card-text-color, $white-floral);\n\n/* =============================================\n=                 MenuItem                     =\n============================================= */\n\n$menu-item-primary-color: var(--menu-item-primary-color, $primary-color);\n$menu-item-text-color: var(--menu-item-text-color, $secondary-color);\n\n/* =============================================\n=                 BasketButton                 =\n============================================= */\n\n$basket-button-bg: var(--basket-button-bg, $secondary-color);\n$basket-button-text-color: var(--basket-button-text-color, $white-floral);\n\n/* =============================================\n=                 SpecialMealCard              =\n============================================= */\n$special-meal-card-color: var(--special-meal-card-color, $primary-color);\n$special-meal-card-color-hover: var(\n  --special-meal-card-color-hover,\n  $white-floral\n);\n\n/* ================================================\n=                 HighLightCard               =\n============================================= */\n$highlight-card-bg: var(--highlight-card-bg, $primary-color);\n$highlight-card-color: var(--highlight-card-color, $white-floral);\n$highlight-card-link-tint: var(--highlight-card-link-tint, $white);\n$highlight-card-secondary-color: var(\n  --highlight-card-secondary-color,\n  $secondary-color\n);\n$highlight-card-secondary-link-shade: var(\n  --highlight-card-secondary-link-shade,\n  $primary-color-shade\n);\n\n/* =============================================\n=                 BranchCard              =\n============================================= */\n$branch-card-color: var(--branch-card-color, $white-floral) !default;\n$branch-card-location-color: var(--branch-card-location-color, $green-neon) !default;\n\n/* ======================================================\n=                SpecialServiceCard              =\n======================================================= */\n$special-service-heading-color:var(--special-service-heading-color,$primary-color) !default;\n$special-service-description-color:var(--special-service-description-color,$secondary-color) !default;\n\n\n/* =============================================\n=                 MemberCard              =\n============================================= */\n$member-card-color: var(--member-card-color, $primary-color) !default;\n$member-card-border-color: var(\n  --member-card-border-color,\n  $primary-color\n) !default;\n\n/* ================================================\n=                 Header               =\n============================================= */\n\n$header-top-bg-color: var(--header-top-bg, $primary-color);\n$header-bottom-bg-color: var(--header-bottom-bg, $white-floral);\n$header-bottom-link-shade-color: var(\n  --header-bottom-link-shade-color,\n  $primary-color-shade\n);\n$header-shadow-color: var(--header-shadow-color, $shadow-color);\n\n",'/* =============================================\n    #Variables\n============================================= */\n\n/**\n * TABLE OF CONTENTS\n * \n * COLORS\n * Brand colors...................These are the main brand colors. They will be used the most\n * Neutral colors.................White and black, gray scale, secondary colors.\n * Utility colors.................Other colors to represent states: info, warning, success, etc.\n * \n * TYPOGRAPHY\n * Font families..................The fonts used in the design system.\n * Font weights...................Font weights\n * Sizes..........................Font sizing for body text, paragraphs, inputs\n * Heading sizes..................Font sizing for page headings\n *\n * BREAKPOINTS\n * Breakpoints....................Global responsive breakpoints definitions.\n *\n * SPACING\n * Spacing........................Global fixed set of spacing variables\n */\n\n/* =============================================\n=                  Colors                     =\n============================================= */\n\n/* Brand Colors */\n\n$primary-color: #c33;\n$secondary-color: #2a435d;\n\n/* Neutral Colors */\n\n$white-floral: #fff8ee;\n\n/* Utility colors */\n\n$green-neon: #4bff3c;\n$white: #fff;\n\n/* Brand colors shades */\n\n$primary-color-shade: #b82e2e;\n\n/* Shadow colors */\n\n$shadow-color: #0003;\n\n/* =====  End of Colors  ====== */\n\n/* =============================================\n=                Typography                   =\n============================================= */\n\n/**\n *\n * 1) The playfair font. We\'ll use this for headings mostly.\n *     https://fonts.google.com/specimen/Playfair+Display\n *\n * 2) The raleway font. We\'ll use this for the body text.\n *     https://fonts.google.com/specimen/Raleway\n */\n\n/* Font families */\n\n$playfair: "Playfair Display", serif; /* 1 */\n$raleway: "Raleway", "HelveticaNeue", "Helvetica", sans-serif; /* 2 */\n\n/* Font sizes */\n$fs-xs: 0.75rem; // 12px\n$fs-sm: 1rem; // 16px\n$fs-md: 1.125rem; // 18px\n$fs-lg: 1.25rem; // 20px\n$fs-xl: 1.5625rem; // 25px\n$fs-xxl: 2.1875rem; // 35px\n$fs-xxxl: 3.125rem; // 50px\n\n$fs: (\n  xs: 0.75rem,\n  // 12px\n  sm: 1rem,\n  // 16px\n  md: 1.125rem,\n  // 18px\n  lg: 1.25rem,\n  // 20px\n  xl: 1.5625rem,\n  // 25px\n  xxl: 2.1875rem,\n  // 35px\n  xxxl: 3.125rem,\n  // 50px\n);\n\n/* Heading font sizes */\n$h-1: 3.125rem; // 50px\n$h-2: 2.1875rem; // 35px\n$h-3: 1.5625rem; // 25px\n$h-4: 1.25rem; // 20px\n$h-5: 1.125rem; // 18px\n$h-6: 1rem; // 16px\n\n/* Font weights */\n$fw-light: 300;\n$fw-normal: 400;\n$fw-medium: 500;\n$fw-semibold: 600;\n$fw-bold: 700;\n$fw-extrabold: 800;\n$fw-black: 900;\n\n/* =====  End of Typography  ====== */\n\n/* =============================================\n=            Breakpoints                      =\n============================================= */\n\n$breakpoints: (\n  md: 48rem,\n  // 768px\n  lg: 64rem,\n  // 1024px\n  xl: 80rem,\n  // 1280px\n);\n\n/* =====  End of Breakpoints  ====== */\n\n/* =============================================\n=            Spacing                          =\n============================================= */\n\n$spacing: (\n  xxxs: 0.25rem,\n  // 4px\n  xxs: 0.5rem,\n  // 8px\n  xs: 0.75rem,\n  // 12px\n  sm: 1rem,\n  // 16px\n  md: 1.5rem,\n  // 24px\n  lg: 2rem,\n  // 32px\n  xl: 3rem,\n  // 48px\n  xxl: 4.5rem,\n  // 72px\n  xxxl: 6rem,\n  // 96px\n) !default;\n\n@function px-to-rem($px-value) {\n  @return $px-value / 16 * 1rem;\n}\n\n/* =====  End of Spacing  ====== */\n\n/* Border radius values */\n$br-sm: 10px;\n$br-md: 20px;\n$br-lg: 25px;\n$br-full: 9999px;\n'],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={"info-card":"InfoCard_info-card__n26I6","info-card__icon":"InfoCard_info-card__icon__O0brr","info-card__icon__box":"InfoCard_info-card__icon__box__i8Pvn","info-card__title":"InfoCard_info-card__title__5Ai8I"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/components/molecules/branchCard/BranchCard.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".BranchCard_branch-card__GW5Zu{align-items:center;border-radius:10px;color:var(--branch-card-color, #fff8ee);display:flex;font-family:Roboto,sans-serif;justify-content:space-between;overflow:hidden;padding:1.25rem;transition:all 300ms ease;width:fit-content}.BranchCard_branch-card__info__adJ0U{align-items:center;display:flex;flex:1;flex-direction:column;gap:.625rem;justify-content:center}.BranchCard_branch-card__info__name__81rUo{font-size:2.1875rem;font-weight:700;padding:.125rem}.BranchCard_branch-card__info__address__Datgt{font-size:1.25rem;font-weight:700;padding:.125rem}.BranchCard_branch-card__info__info_block__VJkxD{display:flex;justify-content:space-around;width:100%}.BranchCard_branch-card__info__location__Ncix1{align-items:center;color:var(--branch-card-location-color, #4bff3c);cursor:pointer;display:flex;font-size:1.125rem;font-weight:400;justify-content:center;padding:.125rem;text-decoration:none}","",{version:3,sources:["webpack://./src/components/molecules/branchCard/BranchCard.module.scss","webpack://./src/foundations/sass/_variables.scss","webpack://./src/foundations/sass/_colors.scss"],names:[],mappings:"AAEA,+BACE,kBAAA,CACA,kBC+JM,CD9JN,uCE8EkB,CF7ElB,YAAA,CACA,6BAAA,CACA,6BAAA,CACA,eAAA,CACA,eAAA,CACA,yBAAA,CACA,iBAAA,CAEA,qCACE,kBAAA,CACA,YAAA,CACA,MAAA,CACA,qBAAA,CACA,WAAA,CACA,sBAAA,CAEA,2CACE,mBCsDG,CDrDH,eCsFI,CDrFJ,eAAA,CAGF,8CACE,iBC8CE,CD7CF,eCgFI,CD/EJ,eAAA,CAGF,iDACE,YAAA,CACA,4BAAA,CACA,UAAA,CAGF,+CACE,kBAAA,CACA,gDE0CuB,CFzCvB,cAAA,CACA,YAAA,CACA,kBC6BE,CD5BF,eC6DM,CD5DN,sBAAA,CACA,eAAA,CACA,oBAAA",sourcesContent:['@import "../../../foundations/sass/all";\n\n.branch-card {\n  align-items: center;\n  border-radius: $br-sm;\n  color: $branch-card-color;\n  display: flex;\n  font-family: Roboto, sans-serif;\n  justify-content: space-between;\n  overflow: hidden;\n  padding: px-to-rem(20);\n  transition: all 300ms ease;\n  width: fit-content;\n\n  &__info {\n    align-items: center;\n    display: flex;\n    flex: 1;\n    flex-direction: column;\n    gap: px-to-rem(10);\n    justify-content: center;\n\n    &__name {\n      font-size: $fs-xxl;\n      font-weight: $fw-bold;\n      padding: px-to-rem(2);\n    }\n\n    &__address {\n      font-size: $fs-lg;\n      font-weight: $fw-bold;\n      padding: px-to-rem(2);\n    }\n\n    &__info_block {\n      display: flex;\n      justify-content: space-around;\n      width: 100%;\n    }\n\n    &__location {\n      align-items: center;\n      color: $branch-card-location-color;\n      cursor: pointer;\n      display: flex;\n      font-size: $fs-md;\n      font-weight: $fw-normal;\n      justify-content: center;\n      padding: px-to-rem(2);\n      text-decoration: none;\n    }\n  }\n}\n','/* =============================================\n    #Variables\n============================================= */\n\n/**\n * TABLE OF CONTENTS\n * \n * COLORS\n * Brand colors...................These are the main brand colors. They will be used the most\n * Neutral colors.................White and black, gray scale, secondary colors.\n * Utility colors.................Other colors to represent states: info, warning, success, etc.\n * \n * TYPOGRAPHY\n * Font families..................The fonts used in the design system.\n * Font weights...................Font weights\n * Sizes..........................Font sizing for body text, paragraphs, inputs\n * Heading sizes..................Font sizing for page headings\n *\n * BREAKPOINTS\n * Breakpoints....................Global responsive breakpoints definitions.\n *\n * SPACING\n * Spacing........................Global fixed set of spacing variables\n */\n\n/* =============================================\n=                  Colors                     =\n============================================= */\n\n/* Brand Colors */\n\n$primary-color: #c33;\n$secondary-color: #2a435d;\n\n/* Neutral Colors */\n\n$white-floral: #fff8ee;\n\n/* Utility colors */\n\n$green-neon: #4bff3c;\n$white: #fff;\n\n/* Brand colors shades */\n\n$primary-color-shade: #b82e2e;\n\n/* Shadow colors */\n\n$shadow-color: #0003;\n\n/* =====  End of Colors  ====== */\n\n/* =============================================\n=                Typography                   =\n============================================= */\n\n/**\n *\n * 1) The playfair font. We\'ll use this for headings mostly.\n *     https://fonts.google.com/specimen/Playfair+Display\n *\n * 2) The raleway font. We\'ll use this for the body text.\n *     https://fonts.google.com/specimen/Raleway\n */\n\n/* Font families */\n\n$playfair: "Playfair Display", serif; /* 1 */\n$raleway: "Raleway", "HelveticaNeue", "Helvetica", sans-serif; /* 2 */\n\n/* Font sizes */\n$fs-xs: 0.75rem; // 12px\n$fs-sm: 1rem; // 16px\n$fs-md: 1.125rem; // 18px\n$fs-lg: 1.25rem; // 20px\n$fs-xl: 1.5625rem; // 25px\n$fs-xxl: 2.1875rem; // 35px\n$fs-xxxl: 3.125rem; // 50px\n\n$fs: (\n  xs: 0.75rem,\n  // 12px\n  sm: 1rem,\n  // 16px\n  md: 1.125rem,\n  // 18px\n  lg: 1.25rem,\n  // 20px\n  xl: 1.5625rem,\n  // 25px\n  xxl: 2.1875rem,\n  // 35px\n  xxxl: 3.125rem,\n  // 50px\n);\n\n/* Heading font sizes */\n$h-1: 3.125rem; // 50px\n$h-2: 2.1875rem; // 35px\n$h-3: 1.5625rem; // 25px\n$h-4: 1.25rem; // 20px\n$h-5: 1.125rem; // 18px\n$h-6: 1rem; // 16px\n\n/* Font weights */\n$fw-light: 300;\n$fw-normal: 400;\n$fw-medium: 500;\n$fw-semibold: 600;\n$fw-bold: 700;\n$fw-extrabold: 800;\n$fw-black: 900;\n\n/* =====  End of Typography  ====== */\n\n/* =============================================\n=            Breakpoints                      =\n============================================= */\n\n$breakpoints: (\n  md: 48rem,\n  // 768px\n  lg: 64rem,\n  // 1024px\n  xl: 80rem,\n  // 1280px\n);\n\n/* =====  End of Breakpoints  ====== */\n\n/* =============================================\n=            Spacing                          =\n============================================= */\n\n$spacing: (\n  xxxs: 0.25rem,\n  // 4px\n  xxs: 0.5rem,\n  // 8px\n  xs: 0.75rem,\n  // 12px\n  sm: 1rem,\n  // 16px\n  md: 1.5rem,\n  // 24px\n  lg: 2rem,\n  // 32px\n  xl: 3rem,\n  // 48px\n  xxl: 4.5rem,\n  // 72px\n  xxxl: 6rem,\n  // 96px\n) !default;\n\n@function px-to-rem($px-value) {\n  @return $px-value / 16 * 1rem;\n}\n\n/* =====  End of Spacing  ====== */\n\n/* Border radius values */\n$br-sm: 10px;\n$br-md: 20px;\n$br-lg: 25px;\n$br-full: 9999px;\n',"/* =============================================\n=            Foundation - colors              =\n============================================= */\n\n/**\n * This file defines the actual colors that will be used for styling. They will default to the palette\n * we defined in the _variable.scss file. This is our default palette, and devs can override this\n * with their own variables.\n */\n\n/* =============================================\n=            Global text colors               =\n============================================= */\n// $body-text-color: var(--body-text-color, $dark) !default;\n// $body-bg-color: var(--body-bg-color, $white) !default;\n\n/* =============================================\n=                 Buttons                     =\n============================================= */\n$btn-primary-color: var(--btn-primary-color, $white-floral) !default;\n$btn-primary-bg: var(--btn-primary-bg, $primary-color) !default;\n\n/* =============================================\n=                 Navbar                      =\n============================================= */\n\n$navbar-color: var(--navbar-color, $secondary-color) !default;\n\n/* =============================================\n=                 DeliveryOrderCard            =\n============================================= */\n\n$delivery-order-card-color: var(\n  --delivery-order-card-color,\n  $secondary-color\n) !default;\n\n/* =============================================\n=                 InfoCard                  =\n============================================= */\n$info-card-color: var(--info-card-text-color, $white-floral);\n\n/* =============================================\n=                 MenuItem                     =\n============================================= */\n\n$menu-item-primary-color: var(--menu-item-primary-color, $primary-color);\n$menu-item-text-color: var(--menu-item-text-color, $secondary-color);\n\n/* =============================================\n=                 BasketButton                 =\n============================================= */\n\n$basket-button-bg: var(--basket-button-bg, $secondary-color);\n$basket-button-text-color: var(--basket-button-text-color, $white-floral);\n\n/* =============================================\n=                 SpecialMealCard              =\n============================================= */\n$special-meal-card-color: var(--special-meal-card-color, $primary-color);\n$special-meal-card-color-hover: var(\n  --special-meal-card-color-hover,\n  $white-floral\n);\n\n/* ================================================\n=                 HighLightCard               =\n============================================= */\n$highlight-card-bg: var(--highlight-card-bg, $primary-color);\n$highlight-card-color: var(--highlight-card-color, $white-floral);\n$highlight-card-link-tint: var(--highlight-card-link-tint, $white);\n$highlight-card-secondary-color: var(\n  --highlight-card-secondary-color,\n  $secondary-color\n);\n$highlight-card-secondary-link-shade: var(\n  --highlight-card-secondary-link-shade,\n  $primary-color-shade\n);\n\n/* =============================================\n=                 BranchCard              =\n============================================= */\n$branch-card-color: var(--branch-card-color, $white-floral) !default;\n$branch-card-location-color: var(--branch-card-location-color, $green-neon) !default;\n\n/* ======================================================\n=                SpecialServiceCard              =\n======================================================= */\n$special-service-heading-color:var(--special-service-heading-color,$primary-color) !default;\n$special-service-description-color:var(--special-service-description-color,$secondary-color) !default;\n\n\n/* =============================================\n=                 MemberCard              =\n============================================= */\n$member-card-color: var(--member-card-color, $primary-color) !default;\n$member-card-border-color: var(\n  --member-card-border-color,\n  $primary-color\n) !default;\n\n/* ================================================\n=                 Header               =\n============================================= */\n\n$header-top-bg-color: var(--header-top-bg, $primary-color);\n$header-bottom-bg-color: var(--header-bottom-bg, $white-floral);\n$header-bottom-link-shade-color: var(\n  --header-bottom-link-shade-color,\n  $primary-color-shade\n);\n$header-shadow-color: var(--header-shadow-color, $shadow-color);\n\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={"branch-card":"BranchCard_branch-card__GW5Zu","branch-card__info":"BranchCard_branch-card__info__adJ0U","branch-card__info__name":"BranchCard_branch-card__info__name__81rUo","branch-card__info__address":"BranchCard_branch-card__info__address__Datgt","branch-card__info__info_block":"BranchCard_branch-card__info__info_block__VJkxD","branch-card__info__location":"BranchCard_branch-card__info__location__Ncix1"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);