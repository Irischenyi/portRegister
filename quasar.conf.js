return {
    capacitor: {
      // (Optional!)
      hideSplashscreen: false, // disables auto-hiding the Splashscreen by Quasar CLI
  
      // (Optional!)
      capacitorCliPreparationParams: [ 'sync', ctx.targetName ],
  
      // (Optional) If not present, will look for package.json > name
      appName: '...', // string
      // (Optional) If not present, will look for package.json > version
      version: '...', // string
      // (Optional) If not present, will look for package.json > description
      description: '...', // string
      framework: [
        plugins: [ 'Loading'],
        components: ['Qbtn', 'Qinput']
      ]
    }
  }