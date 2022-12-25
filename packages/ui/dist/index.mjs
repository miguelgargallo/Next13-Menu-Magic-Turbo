// src/Button.tsx
import { jsx, jsxs } from "react/jsx-runtime";
var Button = () => {
  return /* @__PURE__ */ jsx("div", {
    className: "rounded-md ",
    children: /* @__PURE__ */ jsx("a", {
      href: "https://turbo.build/repo/docs",
      children: /* @__PURE__ */ jsxs("div", {
        className: "bg-white text-black py-2 px-2 m-2 flex",
        children: [
          "Read the docs",
          /* @__PURE__ */ jsx("span", {
            className: "ml-2 bg-gradient-to-r from-brandred to-brandblue bg-clip-text text-transparent",
            children: "\u2192"
          })
        ]
      })
    })
  });
};

// src/Version.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
var Version = () => {
  return /* @__PURE__ */ jsx2("button", {
    className: "hidden bg-yellow-200 py-2 px-4 text-xs font-bold text-black md:block",
    children: /* @__PURE__ */ jsx2("a", {
      href: "http://github.com/miguelgargallo/next13-Fetch-Data-turbo",
      target: "_blank",
      rel: "noopener noreferrer",
      children: "v2.0.0"
    })
  });
};

// src/Footer.tsx
import { jsx as jsx3, jsxs as jsxs2 } from "react/jsx-runtime";
var Footer = () => {
  return /* @__PURE__ */ jsxs2("footer", {
    className: "bg-black py-8 text-center text-white",
    children: [
      /* @__PURE__ */ jsx3("div", {
        children: /* @__PURE__ */ jsxs2("a", {
          children: [
            "Made with \u2764\uFE0F by",
            " ",
            /* @__PURE__ */ jsx3("a", {
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
      /* @__PURE__ */ jsx3("div", {
        children: /* @__PURE__ */ jsxs2("a", {
          children: [
            "2022 \xA9",
            " ",
            /* @__PURE__ */ jsx3("a", {
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
      /* @__PURE__ */ jsxs2("div", {
        className: "hidden sm:block",
        children: [
          /* @__PURE__ */ jsxs2("div", {
            className: "flex w-full items-center justify-center",
            children: [
              /* @__PURE__ */ jsx3("a", {
                href: "https://huggingface.co/spaces/superdatas/LICENSE",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "hidden p-2 md:block",
                children: /* @__PURE__ */ jsx3("picture", {
                  children: /* @__PURE__ */ jsx3("img", {
                    src: "https://huggingface.co/front/assets/huggingface_logo.svg",
                    alt: "Landscape picture",
                    width: 40,
                    height: 20
                  })
                })
              }),
              /* @__PURE__ */ jsx3(Version, {}),
              /* @__PURE__ */ jsxs2("div", {
                className: "hidden py-2 px-4 font-bold text-white md:block",
                style: {
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
                },
                children: [
                  " ",
                  /* @__PURE__ */ jsx3("button", {
                    className: "hidden py-2 px-4 font-bold text-white md:block",
                    children: /* @__PURE__ */ jsx3("a", {
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
          /* @__PURE__ */ jsx3("p", {
            className: "text-white",
            children: "The Art of Prompting, tomorrow, today."
          })
        ]
      })
    ]
  });
};

// src/Menu.tsx
import { jsx as jsx4, jsxs as jsxs3 } from "react/jsx-runtime";
var Menu = () => {
  return /* @__PURE__ */ jsx4("div", {
    className: "bg-white text-black",
    children: /* @__PURE__ */ jsxs3("div", {
      className: "flex flex-row m-2 columns-2 items-center justify-center",
      children: [
        /* @__PURE__ */ jsx4("div", {
          className: "w-full px-16 text-3xl",
          children: /* @__PURE__ */ jsx4("a", {
            href: "/#",
            className: "",
            children: "SuperMenu"
          })
        }),
        /* @__PURE__ */ jsxs3("div", {
          className: "w-full px-16 text-md",
          children: [
            /* @__PURE__ */ jsx4("div", {
              className: "flex items-center justify-center",
              children: /* @__PURE__ */ jsx4("a", {
                href: "/page-1",
                className: "",
                children: "Menu Element 1"
              })
            }),
            /* @__PURE__ */ jsx4("div", {
              className: "flex w-full items-center justify-center",
              children: /* @__PURE__ */ jsx4("a", {
                href: "/page-2",
                className: "",
                children: "Menu Element 2"
              })
            }),
            /* @__PURE__ */ jsx4("div", {
              className: "flex w-full items-center justify-center",
              children: /* @__PURE__ */ jsx4("a", {
                href: "/page-3",
                className: "",
                children: "Menu Element 3"
              })
            }),
            /* @__PURE__ */ jsx4("div", {
              className: "flex w-full items-center justify-center",
              children: /* @__PURE__ */ jsx4("a", {
                href: "/page-4",
                className: "",
                children: "Menu Element 4"
              })
            }),
            /* @__PURE__ */ jsx4("div", {
              className: "flex w-full items-center justify-center",
              children: /* @__PURE__ */ jsx4("a", {
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
import { jsx as jsx5, jsxs as jsxs4 } from "react/jsx-runtime";
var Menu1 = () => {
  return /* @__PURE__ */ jsxs4("div", {
    className: "flex w-full items-center justify-center",
    children: [
      /* @__PURE__ */ jsx5("a", {
        href: "/page-1",
        className: "p-4 text-white text-md font-bold",
        children: "Menu Element 1"
      }),
      /* @__PURE__ */ jsx5("a", {
        href: "/page-2",
        className: "p-4 text-white text-md font-bold",
        children: "Menu Element 2"
      }),
      /* @__PURE__ */ jsx5("a", {
        href: "/#",
        className: "p-4 text-white text-3xl font-bold",
        children: "SuperMenu"
      }),
      /* @__PURE__ */ jsx5("a", {
        href: "/page-4",
        className: "p-4 text-white text-md font-bold",
        children: "Menu Element 4"
      }),
      /* @__PURE__ */ jsx5("a", {
        href: "/page-5",
        className: "p-4 text-white text-md font-bold",
        children: "Menu Element 5"
      })
    ]
  });
};

// src/Menu2.tsx
import { jsx as jsx6, jsxs as jsxs5 } from "react/jsx-runtime";
var Menu2 = () => {
  return /* @__PURE__ */ jsxs5("div", {
    children: [
      /* @__PURE__ */ jsx6("div", {
        className: "flex w-full items-center justify-center",
        children: /* @__PURE__ */ jsx6("a", {
          href: "/#",
          className: "p-4 text-white text-3xl font-bold",
          children: "SuperMenu"
        })
      }),
      /* @__PURE__ */ jsxs5("div", {
        className: "flex w-full items-center justify-center",
        children: [
          /* @__PURE__ */ jsx6("a", {
            href: "/page-1",
            className: "p-4 text-white text-md font-bold",
            children: "Menu Element 1"
          }),
          /* @__PURE__ */ jsx6("a", {
            href: "/page-2",
            className: "p-4 text-white text-md font-bold",
            children: "Menu Element 2"
          }),
          /* @__PURE__ */ jsx6("a", {
            href: "/page-3",
            className: "p-4 text-white text-md font-bold",
            children: "Menu Element 3"
          }),
          /* @__PURE__ */ jsx6("a", {
            href: "/page-4",
            className: "p-4 text-white text-md font-bold",
            children: "Menu Element 4"
          }),
          /* @__PURE__ */ jsx6("a", {
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
import { jsx as jsx7, jsxs as jsxs6 } from "react/jsx-runtime";
var Menu3 = () => {
  return /* @__PURE__ */ jsx7("div", {
    children: /* @__PURE__ */ jsxs6("div", {
      className: "flex w-full items-center justify-center",
      children: [
        /* @__PURE__ */ jsx7("a", {
          href: "/#",
          className: "p-4 text-white text-3xl font-bold",
          children: "SuperMenu"
        }),
        /* @__PURE__ */ jsx7("a", {
          href: "/page-1",
          className: "p-4 text-white text-md font-bold",
          children: "Menu Element 1"
        }),
        /* @__PURE__ */ jsx7("a", {
          href: "/page-2",
          className: "p-4 text-white text-md font-bold",
          children: "Menu Element 2"
        }),
        /* @__PURE__ */ jsx7("a", {
          href: "/page-3",
          className: "p-4 text-white text-md font-bold",
          children: "Menu Element 3"
        }),
        /* @__PURE__ */ jsx7("a", {
          href: "/page-4",
          className: "p-4 text-white text-md font-bold",
          children: "Menu Element 4"
        }),
        /* @__PURE__ */ jsx7("a", {
          href: "/page-5",
          className: "p-4 text-white text-md font-bold",
          children: "Menu Element 5"
        })
      ]
    })
  });
};

// src/Menu4.tsx
import { jsx as jsx8, jsxs as jsxs7 } from "react/jsx-runtime";
var Menu4 = () => {
  return /* @__PURE__ */ jsxs7("div", {
    className: "columns-2 flex flex-row items-center justify-center bg-gray-900",
    children: [
      /* @__PURE__ */ jsx8("div", {
        className: "p-4 text-white text-3xl font-bold",
        children: /* @__PURE__ */ jsx8("a", {
          href: "/#",
          className: "m-2",
          children: "SuperMenu"
        })
      }),
      /* @__PURE__ */ jsxs7("div", {
        className: "p-4 text-white text-md font-bold",
        children: [
          /* @__PURE__ */ jsx8("a", {
            href: "/page-1",
            className: "m-2",
            children: "Element 1"
          }),
          /* @__PURE__ */ jsx8("a", {
            href: "/page-2",
            className: "m-2",
            children: "Element 2"
          }),
          /* @__PURE__ */ jsx8("a", {
            href: "/page-3",
            className: "m-2",
            children: "Element 3"
          }),
          /* @__PURE__ */ jsx8("a", {
            href: "/page-4",
            className: "m-2",
            children: "Element 4"
          }),
          /* @__PURE__ */ jsx8("a", {
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
import { jsx as jsx9, jsxs as jsxs8 } from "react/jsx-runtime";
var Menu5 = () => {
  return /* @__PURE__ */ jsxs8("div", {
    children: [
      /* @__PURE__ */ jsx9("div", {
        className: "flex w-full items-center justify-center",
        children: /* @__PURE__ */ jsx9("a", {
          href: "/#",
          className: "p-4 text-white text-3xl font-bold",
          children: "SuperMenu"
        })
      }),
      /* @__PURE__ */ jsx9("div", {
        className: "flex w-full items-center justify-center",
        children: /* @__PURE__ */ jsx9("a", {
          href: "/page-1",
          className: "p-4 text-white text-md font-bold",
          children: "Menu Element 1"
        })
      }),
      /* @__PURE__ */ jsx9("div", {
        className: "flex w-full items-center justify-center",
        children: /* @__PURE__ */ jsx9("a", {
          href: "/page-2",
          className: "p-4 text-white text-md font-bold",
          children: "Menu Element 2"
        })
      }),
      /* @__PURE__ */ jsx9("div", {
        className: "flex w-full items-center justify-center",
        children: /* @__PURE__ */ jsx9("a", {
          href: "/page-3",
          className: "p-4 text-white text-md font-bold",
          children: "Menu Element 3"
        })
      }),
      /* @__PURE__ */ jsx9("div", {
        className: "flex w-full items-center justify-center",
        children: /* @__PURE__ */ jsx9("a", {
          href: "/page-4",
          className: "p-4 text-white text-md font-bold",
          children: "Menu Element 4"
        })
      }),
      /* @__PURE__ */ jsx9("div", {
        className: "flex w-full items-center justify-center",
        children: /* @__PURE__ */ jsx9("a", {
          href: "/page-5",
          className: "p-4 text-white text-md font-bold",
          children: "Menu Element 5"
        })
      })
    ]
  });
};

// src/Menu6.tsx
import { jsx as jsx10, jsxs as jsxs9 } from "react/jsx-runtime";
var Menu6 = () => {
  return /* @__PURE__ */ jsxs9("div", {
    className: "",
    children: [
      /* @__PURE__ */ jsx10("span", {
        className: "p-4 text-white text-md font-bold flex flex-row items-center justify-center",
        children: /* @__PURE__ */ jsx10("a", {
          href: "/#",
          className: "p-4 text-white text-3xl font-bold",
          children: "SuperMenu"
        })
      }),
      /* @__PURE__ */ jsxs9("span", {
        className: "p-4 text-white text-md font-bold flex flex-row items-center justify-center",
        children: [
          /* @__PURE__ */ jsx10("a", {
            href: "/page-1",
            className: "m-2",
            children: "Element 1"
          }),
          /* @__PURE__ */ jsx10("a", {
            href: "/page-2",
            className: "m-2",
            children: "Element 2"
          }),
          /* @__PURE__ */ jsx10("a", {
            href: "/page-3",
            className: "m-2",
            children: "Element 3"
          }),
          /* @__PURE__ */ jsx10("a", {
            href: "/page-4",
            className: "m-2",
            children: "Element 4"
          }),
          /* @__PURE__ */ jsx10("a", {
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
import { jsx as jsx11, jsxs as jsxs10 } from "react/jsx-runtime";
var Menu7 = () => {
  return /* @__PURE__ */ jsxs10("div", {
    className: "columns-2 flex flex-row items-center justify-center bg-gray-900",
    children: [
      /* @__PURE__ */ jsx11("div", {
        className: "p-4 text-white text-3xl font-bold",
        children: /* @__PURE__ */ jsx11("a", {
          href: "/#",
          className: "m-2",
          children: "SuperMenu"
        })
      }),
      /* @__PURE__ */ jsxs10("div", {
        className: "p-4 text-white text-md font-bold text-white text-md font-bold",
        children: [
          /* @__PURE__ */ jsx11("div", {
            className: "flex w-full items-center justify-center",
            children: /* @__PURE__ */ jsx11("a", {
              href: "/page-1",
              className: "",
              children: "Menu Element 1"
            })
          }),
          /* @__PURE__ */ jsx11("div", {
            className: "flex w-full items-center justify-center",
            children: /* @__PURE__ */ jsx11("a", {
              href: "/page-2",
              className: "",
              children: "Menu Element 2"
            })
          }),
          /* @__PURE__ */ jsx11("div", {
            className: "flex w-full items-center justify-center",
            children: /* @__PURE__ */ jsx11("a", {
              href: "/page-3",
              className: "",
              children: "Menu Element 3"
            })
          }),
          /* @__PURE__ */ jsx11("div", {
            className: "flex w-full items-center justify-center",
            children: /* @__PURE__ */ jsx11("a", {
              href: "/page-4",
              className: "",
              children: "Menu Element 4"
            })
          }),
          /* @__PURE__ */ jsx11("div", {
            className: "flex w-full items-center justify-center",
            children: /* @__PURE__ */ jsx11("a", {
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
export {
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
};
