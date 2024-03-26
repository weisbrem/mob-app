import { View, Image, Text, StyleSheet } from 'react-native';
import { TStudentCourseDescription } from '../../model/course.model';
import { Chip } from '../../../../shared/Chip/Chip';
import { Button } from '../../../../shared/Button/Button';
import { Colors, FontFamily, FontSize, Gaps, LineHeight, Radius } from '../../../../shared/tokens';

export function CourseCard({ image, shortTitle, courseOnDirection }: TStudentCourseDescription) {
  const hasCourseOnDirection = courseOnDirection.length > 0;

  return (
    <View style={styles.card}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.header}>
        <Text style={styles.title}>{shortTitle}</Text>

        <View style={styles.chips}>
          {hasCourseOnDirection &&
            courseOnDirection.map(({ direction }) => <Chip text={direction.name} key={direction.name} />)}
        </View>
      </View>

      <View style={styles.footer}>
        <Button title='Купить' />
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
  },
  footer: {
    backgroundColor: Colors.violetDark,
    paddingHorizontal: 24,
    paddingVertical: 20,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
});
