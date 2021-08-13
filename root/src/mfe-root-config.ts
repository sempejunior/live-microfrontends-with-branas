import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@mfe/navbar",
  app: () => System.import("@mfe/navbar"),
  activeWhen: ()=>true
});

registerApplication({
  name: "@mfe/app1",
  app: () => System.import("@mfe/app1"),
  activeWhen: ["/app1"]
});
registerApplication({
  name: "@mfe/app2",
  app: () => System.import("@mfe/app2"),
  activeWhen: ["/app2"]
});

start({
  urlRerouteOnly: true,
});
