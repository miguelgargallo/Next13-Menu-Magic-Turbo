"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.tsx
var src_exports = {};
__export(src_exports, {
  Button: () => Button,
  Footer: () => Footer,
  Menu: () => Menu,
  Menu1: () => Menu1,
  Menu2: () => Menu2,
  Menu3: () => Menu3,
  Menu4: () => Menu4,
  Menu5: () => Menu5,
  Menu6: () => Menu6,
  Menu7: () => Menu7,
  Version: () => Version
});
module.exports = __toCommonJS(src_exports);

// src/Button.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var Button = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
    className: "rounded-md ",
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
      href: "https://turbo.build/repo/docs",
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        className: "bg-white text-black py-2 px-2 m-2 flex",
        children: [
          "Read the docs",
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
            className: "ml-2 bg-gradient-to-r from-brandred to-brandblue bg-clip-text text-transparent",
            children: "\u2192"
          })
        ]
      })
    })
  });
};

// src/Footer.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
var Footer = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("footer", {
    className: "bg-black py-8 text-center text-white",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", {
        children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("a", {
          children: [
            "Made with \u2764\uFE0F by",
            " ",
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("a", {
              href: "https://twitter.com/miguelgargallo",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "hover:text-blue text-white",
              children: "Miguel Gargallo"
            }),
            "."
          ]
        })
      }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", {
        children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("a", {
          children: [
            "2022 \xA9",
            " ",
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("a", {
              href: "https://huggingface.co/spaces/superdatas/LICENSE",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "hover:text-blue text-white",
              children: "Pylar AI creative ML license"
            }),
            "."
          ]
        })
      }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", {
        className: "hidden sm:block",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", {
            className: "flex w-full items-center justify-center",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("a", {
                href: "https://huggingface.co/spaces/superdatas/LICENSE",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "hidden p-2 md:block",
                children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("picture", {
                  children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("img", {
                    src: "https://huggingface.co/front/assets/huggingface_logo.svg",
                    alt: "Landscape picture",
                    width: 40,
                    height: 20
                  })
                })
              }),
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Versions, {}),
              /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", {
                className: "hidden py-2 px-4 font-bold text-white md:block",
                style: {
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
                },
                children: [
                  " ",
                  /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("button", {
                    className: "hidden py-2 px-4 font-bold text-white md:block",
                    children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("a", {
                      href: "http://twitter.com/miguelgargallo",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      children: "Twitter"
                    })
                  })
                ]
              })
            ]
          }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", {
            className: "text-white",
            children: "The Art of Prompting, tomorrow, today."
          })
        ]
      })
    ]
  });
};

// src/Version.tsx
var import_jsx_runtime3 = require("react/jsx-runtime");
var Version = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("button", {
    className: "hidden bg-yellow-200 py-2 px-4 text-xs font-bold text-black md:block",
    children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("a", {
      href: "http://github.com/miguelgargallo/next13-Fetch-Data-turbo",
      target: "_blank",
      rel: "noopener noreferrer",
      children: "v2.0.0"
    })
  });
};

// src/Menu.tsx
var import_jsx_runtime4 = require("react/jsx-runtime");
var Menu = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", {
    className: "bg-white text-black",
    children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", {
      className: "flex flex-row m-2 columns-2 items-center justify-center",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", {
          className: "w-full px-16 text-3xl",
          children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("a", {
            href: "/#",
            className: "",
            children: "SuperMenu"
          })
        }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", {
          className: "w-full px-16 text-md",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", {
              className: "flex items-center justify-center",
              children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("a", {
                href: "/page-1",
                className: "",
                children: "Menu Element 1"
              })
            }),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", {
              className: "flex w-full items-center justify-center",
              children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("a", {
                href: "/page-2",
                className: "",
                children: "Menu Element 2"
              })
            }),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", {
              className: "flex w-full items-center justify-center",
              children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("a", {
                href: "/page-3",
                className: "",
                children: "Menu Element 3"
              })
            }),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", {
              className: "flex w-full items-center justify-center",
              children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("a", {
                href: "/page-4",
                className: "",
                children: "Menu Element 4"
              })
            }),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", {
              className: "flex w-full items-center justify-center",
              children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("a", {
                href: "/page-5",
                className: "",
                children: "Menu Element 5"
              })
            })
          ]
        })
      ]
    })
  });
};

// src/Menu1.tsx
var import_jsx_runtime5 = require("react/jsx-runtime");
var Menu1 = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", {
    className: "flex w-full items-center justify-center",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("a", {
        href: "/page-1",
        className: "p-4 text-white text-md font-bold",
        children: "Menu Element 1"
      }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("a", {
        href: "/page-2",
        className: "p-4 text-white text-md font-bold",
        children: "Menu Element 2"
      }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("a", {
        href: "/#",
        className: "p-4 text-white text-3xl font-bold",
        children: "SuperMenu"
      }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("a", {
        href: "/page-4",
        className: "p-4 text-white text-md font-bold",
        children: "Menu Element 4"
      }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("a", {
        href: "/page-5",
        className: "p-4 text-white text-md font-bold",
        children: "Menu Element 5"
      })
    ]
  });
};

// src/Menu2.tsx
var import_jsx_runtime6 = require("react/jsx-runtime");
var Menu2 = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", {
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", {
        className: "flex w-full items-center justify-center",
        children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("a", {
          href: "/#",
          className: "p-4 text-white text-3xl font-bold",
          children: "SuperMenu"
        })
      }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", {
        className: "flex w-full items-center justify-center",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("a", {
            href: "/page-1",
            className: "p-4 text-white text-md font-bold",
            children: "Menu Element 1"
          }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("a", {
            href: "/page-2",
            className: "p-4 text-white text-md font-bold",
            children: "Menu Element 2"
          }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("a", {
            href: "/page-3",
            className: "p-4 text-white text-md font-bold",
            children: "Menu Element 3"
          }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("a", {
            href: "/page-4",
            className: "p-4 text-white text-md font-bold",
            children: "Menu Element 4"
          }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("a", {
            href: "/page-5",
            className: "p-4 text-white text-md font-bold",
            children: "Menu Element 5"
          })
        ]
      })
    ]
  });
};

// src/Menu3.tsx
var import_jsx_runtime7 = require("react/jsx-runtime");
var Menu3 = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", {
    children: /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", {
      className: "flex w-full items-center justify-center",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("a", {
          href: "/#",
          className: "p-4 text-white text-3xl font-bold",
          children: "SuperMenu"
        }),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("a", {
          href: "/page-1",
          className: "p-4 text-white text-md font-bold",
          children: "Menu Element 1"
        }),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("a", {
          href: "/page-2",
          className: "p-4 text-white text-md font-bold",
          children: "Menu Element 2"
        }),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("a", {
          href: "/page-3",
          className: "p-4 text-white text-md font-bold",
          children: "Menu Element 3"
        }),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("a", {
          href: "/page-4",
          className: "p-4 text-white text-md font-bold",
          children: "Menu Element 4"
        }),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("a", {
          href: "/page-5",
          className: "p-4 text-white text-md font-bold",
          children: "Menu Element 5"
        })
      ]
    })
  });
};

// src/Menu4.tsx
var import_jsx_runtime8 = require("react/jsx-runtime");
var Menu4 = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", {
    className: "columns-2 flex flex-row items-center justify-center bg-gray-900",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", {
        className: "p-4 text-white text-3xl font-bold",
        children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("a", {
          href: "/#",
          className: "m-2",
          children: "SuperMenu"
        })
      }),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", {
        className: "p-4 text-white text-md font-bold",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("a", {
            href: "/page-1",
            className: "m-2",
            children: "Element 1"
          }),
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("a", {
            href: "/page-2",
            className: "m-2",
            children: "Element 2"
          }),
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("a", {
            href: "/page-3",
            className: "m-2",
            children: "Element 3"
          }),
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("a", {
            href: "/page-4",
            className: "m-2",
            children: "Element 4"
          }),
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("a", {
            href: "/page-5",
            className: "m-2",
            children: "Element 5"
          })
        ]
      })
    ]
  });
};

// src/Menu5.tsx
var import_jsx_runtime9 = require("react/jsx-runtime");
var Menu5 = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", {
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", {
        className: "flex w-full items-center justify-center",
        children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("a", {
          href: "/#",
          className: "p-4 text-white text-3xl font-bold",
          children: "SuperMenu"
        })
      }),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", {
        className: "flex w-full items-center justify-center",
        children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("a", {
          href: "/page-1",
          className: "p-4 text-white text-md font-bold",
          children: "Menu Element 1"
        })
      }),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", {
        className: "flex w-full items-center justify-center",
        children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("a", {
          href: "/page-2",
          className: "p-4 text-white text-md font-bold",
          children: "Menu Element 2"
        })
      }),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", {
        className: "flex w-full items-center justify-center",
        children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("a", {
          href: "/page-3",
          className: "p-4 text-white text-md font-bold",
          children: "Menu Element 3"
        })
      }),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", {
        className: "flex w-full items-center justify-center",
        children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("a", {
          href: "/page-4",
          className: "p-4 text-white text-md font-bold",
          children: "Menu Element 4"
        })
      }),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", {
        className: "flex w-full items-center justify-center",
        children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("a", {
          href: "/page-5",
          className: "p-4 text-white text-md font-bold",
          children: "Menu Element 5"
        })
      })
    ]
  });
};

// src/Menu6.tsx
var import_jsx_runtime10 = require("react/jsx-runtime");
var Menu6 = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", {
    className: "",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", {
        className: "p-4 text-white text-md font-bold flex flex-row items-center justify-center",
        children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("a", {
          href: "/#",
          className: "p-4 text-white text-3xl font-bold",
          children: "SuperMenu"
        })
      }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("span", {
        className: "p-4 text-white text-md font-bold flex flex-row items-center justify-center",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("a", {
            href: "/page-1",
            className: "m-2",
            children: "Element 1"
          }),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("a", {
            href: "/page-2",
            className: "m-2",
            children: "Element 2"
          }),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("a", {
            href: "/page-3",
            className: "m-2",
            children: "Element 3"
          }),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("a", {
            href: "/page-4",
            className: "m-2",
            children: "Element 4"
          }),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("a", {
            href: "/page-5",
            className: "m-2",
            children: "Element 5"
          })
        ]
      })
    ]
  });
};

// src/Menu7.tsx
var import_jsx_runtime11 = require("react/jsx-runtime");
var Menu7 = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", {
    className: "columns-2 flex flex-row items-center justify-center bg-gray-900",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", {
        className: "p-4 text-white text-3xl font-bold",
        children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("a", {
          href: "/#",
          className: "m-2",
          children: "SuperMenu"
        })
      }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", {
        className: "p-4 text-white text-md font-bold text-white text-md font-bold",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", {
            className: "flex w-full items-center justify-center",
            children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("a", {
              href: "/page-1",
              className: "",
              children: "Menu Element 1"
            })
          }),
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", {
            className: "flex w-full items-center justify-center",
            children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("a", {
              href: "/page-2",
              className: "",
              children: "Menu Element 2"
            })
          }),
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", {
            className: "flex w-full items-center justify-center",
            children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("a", {
              href: "/page-3",
              className: "",
              children: "Menu Element 3"
            })
          }),
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", {
            className: "flex w-full items-center justify-center",
            children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("a", {
              href: "/page-4",
              className: "",
              children: "Menu Element 4"
            })
          }),
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", {
            className: "flex w-full items-center justify-center",
            children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("a", {
              href: "/page-5",
              className: "",
              children: "Menu Element 5"
            })
          })
        ]
      })
    ]
  });
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Button,
  Footer,
  Menu,
  Menu1,
  Menu2,
  Menu3,
  Menu4,
  Menu5,
  Menu6,
  Menu7,
  Version
});
