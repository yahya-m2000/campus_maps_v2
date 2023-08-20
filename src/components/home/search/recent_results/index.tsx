import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Style} from '../../../../theme/Style';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import useStyles from '../../../../hooks/useStyles';
import {TColors} from '../../../../theme/color';

interface ResultsProps {
  title: string;
  subtitle: string;
  isFirstResult: boolean;
}

const Results: React.FC<ResultsProps> = ({title, subtitle, isFirstResult}) => {
  const borderBottomWidth = isFirstResult ? Style.RATIO_Y * 0.2 : 0;
  const {colors, styles} = useStyles(createStyles);

  return (
    <TouchableOpacity style={[styles.container, {borderBottomWidth}]}>
      <Icon
        name="clockcircle"
        size={Style.ICON_SIZE}
        style={[styles.component, {color: colors.secondary}]}
      />
      <View style={styles.component}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    </TouchableOpacity>
  );
};

interface RecentResultsProps {
  results: {title: string; subtitle: string}[];
}

const RecentResults: React.FC<RecentResultsProps> = ({results}) => {
  const visibleResults = results.slice(0, 2);
  // const {colors, styles} = useStyles(createStyles);

  return (
    <View>
      {visibleResults.map((result, index) => (
        <Results
          key={index}
          title={result.title}
          subtitle={result.subtitle}
          isFirstResult={index === 0}
        />
      ))}
    </View>
  );
};

const createStyles = (colors: TColors) => {
  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      borderColor: colors.secondary,
      paddingVertical: Style.PADDING_LESS0,
    },
    component: {
      marginRight: Style.MARGIN_LESS0,
    },
    title: {
      fontSize: Style.FONT_SIZE,
    },
    subtitle: {
      fontSize: Style.FONT_SIZE_SMALL,
      color: colors.textSecondary,
    },
    icon: {
      color: colors.secondary,
    },
  });
};

export default RecentResults;
