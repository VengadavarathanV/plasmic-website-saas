// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 9DRVreLqCyHSecyifmovL7
// Component: juql5ohuzM0W2
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import Header2 from "../../Header2"; // plasmic-import: KyV85bZsERAF8Z/component
import Button from "../../Button"; // plasmic-import: QELWMjce80Acl/component
import Testimonial from "../../Testimonial"; // plasmic-import: A4quUmLED9q_5/component
import BlogPosts from "../../BlogPosts"; // plasmic-import: KOg7It0rElZcK/component
import CtaBlock from "../../CtaBlock"; // plasmic-import: ZOx2pDryaEDIj/component
import HeroSection from "../../HeroSection"; // plasmic-import: ZvTRCTeHIlv81Z/component
import Footer from "../../Footer"; // plasmic-import: 6zsXKEMs4WOlZZ/component
import { useScreenVariants as useScreenVariantsruCWDbKoSkemq } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: ruC-wDbKoSKEMQ/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_saa_s_website.module.css"; // plasmic-import: 9DRVreLqCyHSecyifmovL7/projectcss
import sty from "./PlasmicHomepage.module.css"; // plasmic-import: juql5ohuzM0W2/css
import ArrowRightsvgIcon from "./icons/PlasmicIcon__ArrowRightsvg"; // plasmic-import: gm_BEJaLC5ip7u/icon
import corinneKutzTMi2R5NfoUnsplashjpgGzBj5Y3ZkRfGbA from "./images/corinneKutzTMi2R5NfoUnsplashjpg.jpeg"; // plasmic-import: gzBJ5y3ZkRFGbA/picture
import tiffanyTertipesNxcs8Wwj9J0UnsplashjpgV4YrTzTnSdVfnX from "./images/tiffanyTertipesNxcs8Wwj9J0Unsplashjpg.jpeg"; // plasmic-import: V4yrTZTnSDVfnX/picture
import xpsOcAuPlfZxEcUnsplashjpgHlAqfQQhYGiTVm from "./images/xpsOcAuPlfZxEcUnsplashjpg.jpeg"; // plasmic-import: hlAqfQQhYGiTVm/picture
import mepngVk6IFzHoIl07Rg from "./images/mepng.png"; // plasmic-import: vk6iFzHoIl07RG/picture
import thumbAvatar1583758683Jpg43Ij0QYoCq0Kkd from "./images/thumbAvatar1583758683Jpg.jpeg"; // plasmic-import: 43Ij0qYoCQ0kkd/picture

export const PlasmicHomepage__VariantProps = new Array();

export const PlasmicHomepage__ArgProps = new Array();

function PlasmicHomepage__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  const $props = props.args;
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsruCWDbKoSkemq()
  });

  return (
    <React.Fragment>
      <div className={projectcss.plasmic_page_wrapper}>
        {true ? (
          <p.Stack
            as={"div"}
            data-plasmic-name={"root"}
            data-plasmic-override={overrides.root}
            data-plasmic-root={true}
            data-plasmic-for-node={forNode}
            hasGap={true}
            className={classNames(
              projectcss.all,
              projectcss.root_reset,
              projectcss.plasmic_default_styles,
              projectcss.plasmic_mixins,
              projectcss.plasmic_tokens,
              sty.root
            )}
          >
            <div className={classNames(projectcss.all, sty.freeBox__cyJnF)}>
              <div className={classNames(projectcss.all, sty.freeBox___9GlFx)}>
                <Header2
                  data-plasmic-name={"header2"}
                  data-plasmic-override={overrides.header2}
                  className={classNames("__wab_instance", sty.header2)}
                />

                <div className={classNames(projectcss.all, sty.freeBox__kee65)}>
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__jvejs)}
                  >
                    <p.Stack
                      as={"div"}
                      hasGap={true}
                      className={classNames(projectcss.all, sty.freeBox__ztc28)}
                    >
                      <p.Stack
                        as={"div"}
                        hasGap={true}
                        className={classNames(
                          projectcss.all,
                          sty.freeBox__wjmR
                        )}
                      >
                        <h1
                          data-plasmic-name={"h1"}
                          data-plasmic-override={overrides.h1}
                          className={classNames(
                            projectcss.all,
                            projectcss.h1,
                            projectcss.__wab_text,
                            sty.h1
                          )}
                        >
                          {hasVariant(globalVariants, "screen", "mobileOnly")
                            ? "Ready to accept or acquiesce willing."
                            : "Hero for your SaaS landing page."}
                        </h1>

                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text___7UFmh
                          )}
                        >
                          {
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut ."
                          }
                        </div>

                        <Button
                          className={classNames(
                            "__wab_instance",
                            sty.button__qwJ0O
                          )}
                          endIcon={
                            <ArrowRightsvgIcon
                              className={classNames(
                                projectcss.all,
                                sty.svg__xMmO7
                              )}
                              role={"img"}
                            />
                          }
                        >
                          {"Get started"}
                        </Button>
                      </p.Stack>
                    </p.Stack>

                    <div
                      className={classNames(projectcss.all, sty.freeBox__jycjV)}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          sty.freeBox__usYov
                        )}
                      />
                    </div>
                  </p.Stack>
                </div>
              </div>
            </div>

            {true ? (
              <section
                data-plasmic-name={"features"}
                data-plasmic-override={overrides.features}
                className={classNames(projectcss.all, sty.features)}
              >
                <div className={classNames(projectcss.all, sty.column__nBqqM)}>
                  <h2
                    className={classNames(
                      projectcss.all,
                      projectcss.h2,
                      projectcss.__wab_text,
                      sty.h2__n7Jf2
                    )}
                  >
                    {"Value propositions headline."}
                  </h2>

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__mUpS
                    )}
                  >
                    {
                      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. \nLorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                    }
                  </div>

                  <div
                    data-plasmic-name={"container4"}
                    data-plasmic-override={overrides.container4}
                    className={classNames(projectcss.all, sty.container4)}
                  >
                    <div
                      data-plasmic-name={"outerRow2"}
                      data-plasmic-override={overrides.outerRow2}
                      className={classNames(projectcss.all, sty.outerRow2)}
                    >
                      <div
                        data-plasmic-name={"row2"}
                        data-plasmic-override={overrides.row2}
                        className={classNames(projectcss.all, sty.row2)}
                      >
                        <div
                          className={classNames(
                            projectcss.all,
                            sty.column___1CjMz
                          )}
                        >
                          {true ? (
                            <p.Stack
                              as={"div"}
                              hasGap={true}
                              className={classNames(
                                projectcss.all,
                                sty.freeBox__zSzG
                              )}
                            >
                              <div
                                className={classNames(
                                  projectcss.all,
                                  sty.freeBox__t9RZf
                                )}
                              />

                              <h3
                                className={classNames(
                                  projectcss.all,
                                  projectcss.h3,
                                  projectcss.__wab_text,
                                  sty.h3__e228
                                )}
                              >
                                {"Some value proposition of your service."}
                              </h3>

                              <div
                                className={classNames(
                                  projectcss.all,
                                  projectcss.__wab_text,
                                  sty.text__wpEyO
                                )}
                              >
                                {
                                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                                }
                              </div>

                              <Button
                                className={classNames(
                                  "__wab_instance",
                                  sty.button__doIj
                                )}
                                color={"blue"}
                                endIcon={
                                  <ArrowRightsvgIcon
                                    className={classNames(
                                      projectcss.all,
                                      sty.svg__pY8
                                    )}
                                    role={"img"}
                                  />
                                }
                                shape={"rounded"}
                                showEndIcon={true}
                              >
                                {"Learn more"}
                              </Button>
                            </p.Stack>
                          ) : null}
                        </div>

                        <div
                          className={classNames(
                            projectcss.all,
                            sty.column__rEsNc
                          )}
                        >
                          {true ? (
                            <div
                              className={classNames(
                                projectcss.all,
                                sty.freeBox__oPgJd
                              )}
                            >
                              <p.PlasmicImg
                                alt={""}
                                className={classNames(sty.img___4Fs3O)}
                                displayHeight={"400px"}
                                displayMaxHeight={"none"}
                                displayMaxWidth={"none"}
                                displayMinHeight={"0"}
                                displayMinWidth={"0"}
                                displayWidth={"400px"}
                                loading={"lazy"}
                                src={{
                                  src: corinneKutzTMi2R5NfoUnsplashjpgGzBj5Y3ZkRfGbA,
                                  fullWidth: 1920,
                                  fullHeight: 1280,
                                  aspectRatio: undefined
                                }}
                              />
                            </div>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    data-plasmic-name={"container5"}
                    data-plasmic-override={overrides.container5}
                    className={classNames(projectcss.all, sty.container5)}
                  >
                    <div
                      data-plasmic-name={"outerRow3"}
                      data-plasmic-override={overrides.outerRow3}
                      className={classNames(projectcss.all, sty.outerRow3)}
                    >
                      <div
                        data-plasmic-name={"row4"}
                        data-plasmic-override={overrides.row4}
                        className={classNames(projectcss.all, sty.row4)}
                      >
                        <div
                          className={classNames(
                            projectcss.all,
                            sty.column__nXjSi
                          )}
                        >
                          <p.PlasmicImg
                            alt={""}
                            className={classNames(sty.img__cjH2M)}
                            displayHeight={"400px"}
                            displayMaxHeight={"none"}
                            displayMaxWidth={"none"}
                            displayMinHeight={"0"}
                            displayMinWidth={"0"}
                            displayWidth={"400px"}
                            loading={"lazy"}
                            src={{
                              src: tiffanyTertipesNxcs8Wwj9J0UnsplashjpgV4YrTzTnSdVfnX,
                              fullWidth: 1920,
                              fullHeight: 1280,
                              aspectRatio: undefined
                            }}
                          />
                        </div>

                        <div
                          className={classNames(
                            projectcss.all,
                            sty.column__ng59I
                          )}
                        >
                          {true ? (
                            <p.Stack
                              as={"div"}
                              hasGap={true}
                              className={classNames(
                                projectcss.all,
                                sty.freeBox__fagmy
                              )}
                            >
                              <div
                                className={classNames(
                                  projectcss.all,
                                  sty.freeBox__b3Ub2
                                )}
                              />

                              <h3
                                className={classNames(
                                  projectcss.all,
                                  projectcss.h3,
                                  projectcss.__wab_text,
                                  sty.h3__a7SNh
                                )}
                              >
                                {"Some value proposition of your service."}
                              </h3>

                              <div
                                className={classNames(
                                  projectcss.all,
                                  projectcss.__wab_text,
                                  sty.text__ao0Y3
                                )}
                              >
                                {
                                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                                }
                              </div>

                              <Button
                                className={classNames(
                                  "__wab_instance",
                                  sty.button__wgWh
                                )}
                                color={"blue"}
                                endIcon={
                                  <ArrowRightsvgIcon
                                    className={classNames(
                                      projectcss.all,
                                      sty.svg__n1CE0
                                    )}
                                    role={"img"}
                                  />
                                }
                                shape={"rounded"}
                                showEndIcon={true}
                              >
                                {"Learn more"}
                              </Button>
                            </p.Stack>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    data-plasmic-name={"container6"}
                    data-plasmic-override={overrides.container6}
                    className={classNames(projectcss.all, sty.container6)}
                  >
                    <div
                      data-plasmic-name={"outerRow4"}
                      data-plasmic-override={overrides.outerRow4}
                      className={classNames(projectcss.all, sty.outerRow4)}
                    >
                      <div
                        data-plasmic-name={"row3"}
                        data-plasmic-override={overrides.row3}
                        className={classNames(projectcss.all, sty.row3)}
                      >
                        <div
                          className={classNames(
                            projectcss.all,
                            sty.column__o6DKm
                          )}
                        >
                          {true ? (
                            <p.Stack
                              as={"div"}
                              hasGap={true}
                              className={classNames(
                                projectcss.all,
                                sty.freeBox__jiaP
                              )}
                            >
                              <div
                                className={classNames(
                                  projectcss.all,
                                  sty.freeBox__qxgBz
                                )}
                              />

                              <h3
                                className={classNames(
                                  projectcss.all,
                                  projectcss.h3,
                                  projectcss.__wab_text,
                                  sty.h3__plYe
                                )}
                              >
                                {"Some value proposition of your service."}
                              </h3>

                              <div
                                className={classNames(
                                  projectcss.all,
                                  projectcss.__wab_text,
                                  sty.text__zSBs6
                                )}
                              >
                                {
                                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                                }
                              </div>

                              <Button
                                className={classNames(
                                  "__wab_instance",
                                  sty.button__sOkhA
                                )}
                                color={"blue"}
                                endIcon={
                                  <ArrowRightsvgIcon
                                    className={classNames(
                                      projectcss.all,
                                      sty.svg__gHsTe
                                    )}
                                    role={"img"}
                                  />
                                }
                                shape={"rounded"}
                                showEndIcon={true}
                              >
                                {"Learn more"}
                              </Button>
                            </p.Stack>
                          ) : null}
                        </div>

                        <div
                          className={classNames(
                            projectcss.all,
                            sty.column__snoTh
                          )}
                        >
                          <p.PlasmicImg
                            alt={""}
                            className={classNames(sty.img__mFfe)}
                            displayHeight={"400px"}
                            displayMaxHeight={"none"}
                            displayMaxWidth={"none"}
                            displayMinHeight={"0"}
                            displayMinWidth={"0"}
                            displayWidth={"400px"}
                            loading={"lazy"}
                            src={{
                              src: xpsOcAuPlfZxEcUnsplashjpgHlAqfQQhYGiTVm,
                              fullWidth: 640,
                              fullHeight: 360,
                              aspectRatio: undefined
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            ) : null}

            <section
              data-plasmic-name={"testimonials"}
              data-plasmic-override={overrides.testimonials}
              className={classNames(projectcss.all, sty.testimonials)}
            >
              <div className={classNames(projectcss.all, sty.column__ezAan)}>
                <h2
                  className={classNames(
                    projectcss.all,
                    projectcss.h2,
                    projectcss.__wab_text,
                    sty.h2__lDf8I
                  )}
                >
                  {"Testimonials"}
                </h2>

                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__gHdVh
                  )}
                >
                  {
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. \nLorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                  }
                </div>

                <div className={classNames(projectcss.all, sty.columns__saUj8)}>
                  <div
                    className={classNames(projectcss.all, sty.column__kaxi1)}
                  >
                    <Testimonial
                      data-plasmic-name={"testimonial"}
                      data-plasmic-override={overrides.testimonial}
                      className={classNames("__wab_instance", sty.testimonial)}
                    />
                  </div>

                  <div
                    className={classNames(projectcss.all, sty.column__jnPxK)}
                  >
                    <div
                      className={classNames(projectcss.all, sty.columns__bneJv)}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          sty.column___8E08P
                        )}
                      >
                        <p.PlasmicImg
                          alt={""}
                          className={classNames(sty.img__tPP)}
                          displayHeight={"auto"}
                          displayMaxHeight={"none"}
                          displayMaxWidth={"100%"}
                          displayMinHeight={"0"}
                          displayMinWidth={"0"}
                          displayWidth={"auto"}
                          loading={"lazy"}
                          src={{
                            src: mepngVk6IFzHoIl07Rg,
                            fullWidth: 140,
                            fullHeight: 140,
                            aspectRatio: undefined
                          }}
                        />

                        <h5
                          className={classNames(
                            projectcss.all,
                            projectcss.h5,
                            projectcss.__wab_text,
                            sty.h5__vwZwt
                          )}
                        >
                          {"Zulia Maron Duo"}
                        </h5>

                        <div
                          before={""}
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__t3TX8
                          )}
                        >
                          {
                            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                          }
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={classNames(projectcss.all, sty.column__zZbE)}>
                    <div
                      className={classNames(projectcss.all, sty.columns__y4AIi)}
                    >
                      <div
                        className={classNames(projectcss.all, sty.column__jU0D)}
                      >
                        <h2
                          className={classNames(
                            projectcss.all,
                            projectcss.h2,
                            projectcss.__wab_text,
                            sty.h2__enx2A
                          )}
                        >
                          {"“"}
                        </h2>

                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__qI9Zv
                          )}
                        >
                          {
                            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                          }
                        </div>

                        <div
                          className={classNames(
                            projectcss.all,
                            sty.columns__ttzJy
                          )}
                        >
                          <div
                            className={classNames(
                              projectcss.all,
                              sty.column__p1Pc
                            )}
                          >
                            <p.PlasmicImg
                              alt={""}
                              className={classNames(sty.img__lUpNj)}
                              displayHeight={"auto"}
                              displayMaxHeight={"none"}
                              displayMaxWidth={"100%"}
                              displayMinHeight={"0"}
                              displayMinWidth={"0"}
                              displayWidth={"auto"}
                              loading={"lazy"}
                              src={{
                                src: thumbAvatar1583758683Jpg43Ij0QYoCq0Kkd,
                                fullWidth: 160,
                                fullHeight: 160,
                                aspectRatio: undefined
                              }}
                            />
                          </div>

                          <div
                            className={classNames(
                              projectcss.all,
                              sty.column__ouU5K
                            )}
                          >
                            <h5
                              className={classNames(
                                projectcss.all,
                                projectcss.h5,
                                projectcss.__wab_text,
                                sty.h5__y4VuW
                              )}
                            >
                              {"Lorem Ipsum"}
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <BlogPosts
              data-plasmic-name={"blogPosts"}
              data-plasmic-override={overrides.blogPosts}
              className={classNames("__wab_instance", sty.blogPosts)}
            />

            {true ? (
              <CtaBlock
                data-plasmic-name={"ctaBlock"}
                data-plasmic-override={overrides.ctaBlock}
                className={classNames("__wab_instance", sty.ctaBlock)}
              />
            ) : null}

            <HeroSection
              data-plasmic-name={"heroSection"}
              data-plasmic-override={overrides.heroSection}
              className={classNames("__wab_instance", sty.heroSection)}
            />

            <Footer
              data-plasmic-name={"footer"}
              data-plasmic-override={overrides.footer}
              className={classNames("__wab_instance", sty.footer)}
            />
          </p.Stack>
        ) : null}
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "header2",
    "h1",
    "features",
    "container4",
    "outerRow2",
    "row2",
    "container5",
    "outerRow3",
    "row4",
    "container6",
    "outerRow4",
    "row3",
    "testimonials",
    "testimonial",
    "blogPosts",
    "ctaBlock",
    "heroSection",
    "footer"
  ],

  header2: ["header2"],
  h1: ["h1"],
  features: [
    "features",
    "container4",
    "outerRow2",
    "row2",
    "container5",
    "outerRow3",
    "row4",
    "container6",
    "outerRow4",
    "row3"
  ],

  container4: ["container4", "outerRow2", "row2"],
  outerRow2: ["outerRow2", "row2"],
  row2: ["row2"],
  container5: ["container5", "outerRow3", "row4"],
  outerRow3: ["outerRow3", "row4"],
  row4: ["row4"],
  container6: ["container6", "outerRow4", "row3"],
  outerRow4: ["outerRow4", "row3"],
  row3: ["row3"],
  testimonials: ["testimonials", "testimonial"],
  testimonial: ["testimonial"],
  blogPosts: ["blogPosts"],
  ctaBlock: ["ctaBlock"],
  heroSection: ["heroSection"],
  footer: ["footer"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicHomepage__ArgProps,
      internalVariantPropNames: PlasmicHomepage__VariantProps
    });

    return PlasmicHomepage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHomepage";
  } else {
    func.displayName = `PlasmicHomepage.${nodeName}`;
  }
  return func;
}

export const PlasmicHomepage = Object.assign(
  // Top-level PlasmicHomepage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    header2: makeNodeComponent("header2"),
    h1: makeNodeComponent("h1"),
    features: makeNodeComponent("features"),
    container4: makeNodeComponent("container4"),
    outerRow2: makeNodeComponent("outerRow2"),
    row2: makeNodeComponent("row2"),
    container5: makeNodeComponent("container5"),
    outerRow3: makeNodeComponent("outerRow3"),
    row4: makeNodeComponent("row4"),
    container6: makeNodeComponent("container6"),
    outerRow4: makeNodeComponent("outerRow4"),
    row3: makeNodeComponent("row3"),
    testimonials: makeNodeComponent("testimonials"),
    testimonial: makeNodeComponent("testimonial"),
    blogPosts: makeNodeComponent("blogPosts"),
    ctaBlock: makeNodeComponent("ctaBlock"),
    heroSection: makeNodeComponent("heroSection"),
    footer: makeNodeComponent("footer"),
    // Metadata about props expected for PlasmicHomepage
    internalVariantProps: PlasmicHomepage__VariantProps,
    internalArgProps: PlasmicHomepage__ArgProps
  }
);

export default PlasmicHomepage;
/* prettier-ignore-end */