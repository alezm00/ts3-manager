export default [
  {
    path: "/snapshot",
    component: () => import("@/components/ServerSnapshot"),
    name: "snapshot",
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/tokens",
    component: () => import("@/components/Tokens"),
    name: "tokens",
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/token/add",
    component: () => import("@/components/TokenAdd"),
    name: "token-add",
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/console",
    component: () => import("@/components/Console"),
    name: "console",
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/",
    redirect: {
      name: "login"
    }
  },
  {
    path: "/servers",
    component: () => import("@/components/Servers"),
    name: "servers",
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/server/create",
    component: () => import("@/components/ServerCreate"),
    name: "server-create",
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/chat/:cid?",
    component: () => import("@/components/TextMessages2"),
    name: "chat",
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/clients",
    component: () => import("@/components/Clients"),
    name: "clients",
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/client/:cldbid/ban",
    component: () => import("@/components/ClientBan"),
    name: "client-ban",
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/client/:clid/edit",
    component: () => import("@/components/ClientEdit"),
    name: "client-edit",
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/permissions/client/:cldbid?",
    component: () => import("@/components/ClientPermissions"),
    name: "permissions-client",
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/bans",
    component: () => import("@/components/Bans"),
    name: "bans",
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/ban/add",
    component: () => import("@/components/BanAdd"),
    name: "ban-add",
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/ban/:banid/edit",
    component: () => import("@/components/BanEdit"),
    name: "ban-edit",
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/complaints",
    component: () => import("@/components/Complaints"),
    name: "complaints",
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/servergroups",
    component: () => import("@/components/ServerGroups"),
    name: "servergroups",
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/servergroup/:sgid/edit",
    component: () => import("@/components/ServerGroupEdit"),
    name: "servergroup-edit",
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/permissions/servergroup/:sgid?",
    component: () => import("@/components/ServerGroupPermissions"),
    name: "permissions-servergroup",
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/permissions/channel/:cid?",
    component: () => import("@/components/ChannelPermissions"),
    name: "permissions-channel",
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/channel/:cid/edit",
    component: () => import("@/components/ChannelEdit"),
    name: "channel-edit",
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/channelgroups",
    component: () => import("@/components/ChannelGroups"),
    name: "channelgroups",
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/channelgroup/:cgid/edit",
    component: () => import("@/components/ChannelGroupEdit"),
    name: "channelgroup-edit",
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/permissions/channelgroup/:cgid?",
    component: () => import("@/components/ChannelGroupPermissions"),
    name: "permissions-channelgroup",
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/permissions/channel/:cid?/client/:cldbid?",
    component: () => import("@/components/ChannelClientPermissions"),
    name: "permissions-channelclient",
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/serverviewer",
    component: () => import("@/components/ServerViewer"),
    name: "serverviewer",
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/login",
    component: () => import("@/components/Login"),
    name: "login",
    meta: {
      requiresAuth: false
    }
  },
  {
    path: "/logout",
    component: () => import("@/components/Logout"),
    name: "logout",
    meta: {
      requiresAuth: true
    }
  },
  // {
  //   path: "/test",
  //   component: () => import("@/components/Test"),
  //   name: "test",
  //   meta: {
  //     requiresAuth: false
  //   }
  // },
  {
    path: "*",
    component: () => import("@/components/NotFound"),
    name: "404",
    meta: {
      requiresAuth: false
    }
  }
];
