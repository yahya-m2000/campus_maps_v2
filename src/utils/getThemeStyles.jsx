export const getThemeStyles = (themeColors, stylesConfig) => {
  const styles = {};

  // Loop through each property defined in stylesConfig
  Object.keys(stylesConfig).forEach(property => {
    // Get the associated color property from stylesConfig
    const colorProperty = stylesConfig[property];

    // Create a new style object with the color property set to the theme color
    styles[property] = {[colorProperty]: themeColors[colorProperty]};
  });

  // Return the generated styles object
  return styles;
};
