// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 9DRVreLqCyHSecyifmovL7
// Component: ZOx2pDryaEDIj
import * as React from "react";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import Button from "../../Button"; // plasmic-import: QELWMjce80Acl/component
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_saa_s_website.module.css"; // plasmic-import: 9DRVreLqCyHSecyifmovL7/projectcss
import sty from "./PlasmicCtaBlock.module.css"; // plasmic-import: ZOx2pDryaEDIj/css

export const PlasmicCtaBlock__VariantProps = new Array();

export const PlasmicCtaBlock__ArgProps = new Array();

function PlasmicCtaBlock__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  const $props = props.args;
  return (
    <section
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
    >
      <div
        data-plasmic-name={"outer"}
        data-plasmic-override={overrides.outer}
        className={classNames(projectcss.all, sty.outer)}
      >
        <div
          data-plasmic-name={"container"}
          data-plasmic-override={overrides.container}
          className={classNames(projectcss.all, sty.container)}
        >
          <div className={classNames(projectcss.all, sty.column__u3Yk9)}>
            <h2
              data-plasmic-name={"h2"}
              data-plasmic-override={overrides.h2}
              className={classNames(
                projectcss.all,
                projectcss.h2,
                projectcss.__wab_text,
                sty.h2
              )}
            >
              {"To Make Requests For The\nFurther Information"}
            </h2>

            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__da4Af
              )}
            >
              {"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
            </div>
          </div>

          <div className={classNames(projectcss.all, sty.column__inc7L)}>
            <Button
              data-plasmic-name={"button"}
              data-plasmic-override={overrides.button}
              className={classNames("__wab_instance", sty.button)}
              color={"blue"}
              link={"#"}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__qonel
                )}
              >
                {"Join With Now"}
              </div>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

const PlasmicDescendants = {
  root: ["root", "outer", "container", "h2", "button"],
  outer: ["outer", "container", "h2", "button"],
  container: ["container", "h2", "button"],
  h2: ["h2"],
  button: ["button"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicCtaBlock__ArgProps,
      internalVariantPropNames: PlasmicCtaBlock__VariantProps
    });

    return PlasmicCtaBlock__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCtaBlock";
  } else {
    func.displayName = `PlasmicCtaBlock.${nodeName}`;
  }
  return func;
}

export const PlasmicCtaBlock = Object.assign(
  // Top-level PlasmicCtaBlock renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    outer: makeNodeComponent("outer"),
    container: makeNodeComponent("container"),
    h2: makeNodeComponent("h2"),
    button: makeNodeComponent("button"),
    // Metadata about props expected for PlasmicCtaBlock
    internalVariantProps: PlasmicCtaBlock__VariantProps,
    internalArgProps: PlasmicCtaBlock__ArgProps
  }
);

export default PlasmicCtaBlock;
/* prettier-ignore-end */
