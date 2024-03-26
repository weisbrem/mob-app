import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../../shared/tokens';
import { useAtomValue, useSetAtom } from 'jotai';
import { courseAtom, loadCourseAtom } from '../../entities/course/model/course.state';
import { useEffect } from 'react';

export default function MyCourses() {
  const loadCourse = useSetAtom(loadCourseAtom);
  const { courses, status, errorMessage } = useAtomValue(courseAtom);

  const hasCourse = courses.length > 0;

  useEffect(() => {
    loadCourse();
  }, []);

  return (
    <View>
      {hasCourse &&
        courses.map(({ title, id }) => (
          <Text style={styles.text} key={id}>
            {title}
          </Text>
        ))}
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: Colors.text,
  },
});
