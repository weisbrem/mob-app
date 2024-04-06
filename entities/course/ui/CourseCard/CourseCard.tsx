import { View, Image, Text, StyleSheet, Linking } from 'react-native';
import { TStudentCourseDescription } from '../../model/course.model';
import { Chip } from '../../../../shared/Chip/Chip';
import { Button } from '../../../../shared/Button/Button';
import { Colors, FontFamily, FontSize, Gaps, LineHeight, Radius } from '../../../../shared/tokens';
import MaskedView from '@react-native-masked-view/masked-view';
import { LinearGradient } from 'expo-linear-gradient';

export function CourseCard({ image, shortTitle, courseOnDirection, alias, tariff }: TStudentCourseDescription) {
  const hasCourseOnDirection = courseOnDirection.length > 0;
  const buyLink = `https://app.purpleschool.ru/courses/${alias}`;

  const humanTarifName = tariff === 'basic' && 'Самостоятельный';

  const handleBuyButtonPress = () => {
    Linking.openURL(buyLink);
  };

  return (
    <View style={styles.card}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.header}>
        <Text style={styles.title}>{shortTitle}</Text>

        <View style={styles.chips}>
          {hasCourseOnDirection &&
            courseOnDirection.map(({ direction }) => <Chip text={direction.name} key={direction.name} />)}
        </View>

        <MaskedView maskElement={<Text style={styles.tarif}>Тариф &laquo;{humanTarifName}&raquo;</Text>}>
          <LinearGradient colors={['#D77BE5', '#6C38CC']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
            <Text style={{ ...styles.tarif, ...styles.tarifWithOpacity }}>Тариф &laquo;{humanTarifName}&raquo;</Text>
          </LinearGradient>
        </MaskedView>
      </View>

      <View style={styles.footer}>
        <Button onPress={handleBuyButtonPress} title='Купить' />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'column',
    backgroundColor: Colors.blackLight,
    borderRadius: Radius.r10,
  },
  image: {
    borderRadius: Radius.r10,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    height: 200,
  },
  title: {
    fontFamily: FontFamily.FiraSansSemiBold,
    fontSize: FontSize.f20,
    lineHeight: LineHeight.l24,
    color: Colors.text,
    marginBottom: 12,
  },
  header: {
    paddingHorizontal: 24,
    paddingVertical: 18,
  },
  chips: {
    flexDirection: 'row',
    columnGap: Gaps.g10,
    marginBottom: 18,
  },
  tarif: {
    fontFamily: FontFamily.FiraSans,
    fontSize: FontSize.f16,
    lineHeight: LineHeight.l20,
    color: Colors.text,
    fontWeight: '400',
  },
  tarifWithOpacity: {
    opacity: 0,
  },
  footer: {
    backgroundColor: Colors.violetDark,
    paddingHorizontal: 24,
    paddingVertical: 20,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
});
