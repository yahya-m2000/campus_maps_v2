import {Dimensions, Platform} from 'react-native';

// pre calculate device dimensions for better performance
const {height, width} = Dimensions.get('window');

// calculate ratio from iPhone breakpoints (height and width)
const ratioX = width < 375 ? (width < 320 ? 0.75 : 0.875) : 1;
const ratioY = height < 568 ? (height < 480 ? 0.75 : 0.875) : 1;

// we set the base font size
const base_unit = 16;

// we're simulating EM by changing font size according to ratio. just so i don't forget as i am copying code, essentialy we're setting the ratio on ratioX and ratioY. initially, the ratio is 1, so in the case where it's 1 the base_unit will remain the same as 16 (the base_unit's value) * 1 is still 16. however, let's say the screen size is smaller, the ratio will be 0.75, and 16 * 0.75 will make the base unit 12.
const unit = base_unit * ratioX;

// we add an em() shortcut function. for my understand, this functions as a scale. so em(1.25) would scale text or anything you would want to scale to be 25% bigger than the average.
function em(value: number) {
  return unit * value;
}

const navBarHeight = Platform.OS === 'ios' ? 54 : 54; //IOS 43.4
const navBarStatusHeight = 25;

// then we set our styles with the help of the em() function
const Style = {
  // GENERAL
  DEVICE_WIDTH: width,
  DEVICE_HEIGHT: height,
  RATIO_X: ratioX,
  RATIO_Y: ratioY,
  UNIT: em(1),
  MARGIN_LESS0: em(1),
  MARGIN_LESS1: em(0.1),
  MARGIN_LESS2: em(0.2),
  MARGIN_LESS25: em(0.25),
  MARGIN_LESS3: em(0.3),
  MARGIN_LESS4: em(0.4),
  MARGIN_LESS5: em(0.5),
  MARGIN_LESS6: em(0.6),
  MARGIN_LESS7: em(0.7),
  MARGIN_LESS8: em(0.8),
  MARGIN_LESS9: em(0.9),
  MARGIN: em(1.25),
  MARGIN1: em(1.5),
  MARGIN2: em(1.75),
  MARGIN3: em(2.0),
  MARGIN4: em(2.5),
  MARGIN5: em(3.0),
  PADDING_LESS0: em(1),
  PADDING_LESS1: em(0.1),
  PADDING_LESS2: em(0.2),
  PADDING_LESS25: em(0.25),
  PADDING_LESS3: em(0.3),
  PADDING_LESS4: em(0.4),
  PADDING_LESS5: em(0.5),
  PADDING_LESS6: em(0.6),
  PADDING_LESS7: em(0.7),
  PADDING_LESS8: em(0.8),
  PADDING_LESS9: em(0.9),
  PADDING: em(1.25),
  PADDING1: em(1.5),
  PADDING2: em(1.75),
  PADDING3: em(2.0),
  PADDING4: em(2.5),
  PADDING5: em(3.0),
  // PADDING_TOP_SAFE_AREA: Platform.OS === 'ios' ? paddingTopIOS : 0,

  // CARD
  CARD_WIDTH: width - em(1.25) * 12,
  CARD_HEIGHT: height - em(1.25) * 34,
  CARD_PADDING_X: em(1.875),
  CARD_PADDING_Y: em(1.25),

  // NAVIGATION
  NAV_BAR_HEIGHT: navBarHeight,
  NAV_BAR_STATUS_HEIGHT: navBarStatusHeight,

  //TABLE
  // TABLE_HEIGHT: Utils.isIphoneX(x, y) ? (y - 380) / 7 : (y - 310) / 7,
  CALENDAR_DAYS: (width - 65) / 6,
  CALENDAR_HOURS: (width - 50) / 2,

  //FORM ANIVERSARIO
  ANNIVERSARY: (width - (em(1.25) * 4 + em(0.2) * 12)) / 6,

  // FONT
  // FONT_FAMILY: 'system font',
  FONT_FAMILY: 'arial',
  FONT_SIZE: {
    fontSize: em(1),
    fontWeight: '600',
  },
  FONT_SIZE_SMALLER_2: em(0.4),
  FONT_SIZE_SMALLER_1: em(0.65),
  FONT_SIZE_SMALLER: em(0.75),
  FONT_SIZE_SMALL: em(0.875),
  FONT_SIZE_TITLE: em(1.25),
  FONT_SIZE_TITLE_BIG: em(1.5),
  FONT_SIZE_TITLE_BIGGER: em(1.75),
  FONT_SIZE_TITLE_BIGGER2: em(1.9),
  FONT_SIZE_TITLE_BIGGEST: em(2.25),
  FONT_SIZE_TITLE_MEGA_BIGGEST: em(3.5),

  // ICONS
  ICON_SIZE: em(1.5), //navBarHeight / 2.5 //

  // BORDER RADIUS
  BORDER_RADIUS_SMALL: em(0.75),
  BORDER_RADIUS: em(1),
  BORDER_RADIUS_LARGE: em(1.25),
};

export {Style};
