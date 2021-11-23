const DRINKS_IMAGES = {
  T: '/images/tea.png',
  O: '/images/orange.png',
  C: '/images/coffee.png',
  H: '/images/chocolate.png',
};

export const drinkMaker = {
  execute: (command) => {
    const commands = command.split(':');
    const [drinkType, ...rest] = commands;

    if (drinkType === 'M') {
      console.log(rest);
    }

    console.log(drinkType);
    console.log(DRINKS_IMAGES[drinkType]);

    return DRINKS_IMAGES[drinkType];
  },
};
