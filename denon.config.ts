import { DenonConfig } from "https://deno.land/x/denon/mod.ts";

const config: DenonConfig = {
  scripts: {
    dev: {
      cmd: 'index.ts',
      desc: 'Launch dev environment',
      allow: [
        'env',
        'read',
        'write',
        'net'
      ],
      env: {
        ENV: 'development'
      },
      log: 'info'
    },
  },
};

export default config;
