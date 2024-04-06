import { View, FlatList, StyleSheet, ActivityIndicator, RefreshControl } from 'react-native';
import { useAtomValue, useSetAtom } from 'jotai';
import { courseAtom, loadCourseAtom } from '../../entities/course/model/course.state';
import { useEffect } from 'react';
import { CourseCard } from '../../widget/course/ui/CourseCard/CourseCard';
import { TStudentCourseDescription } from '../../entities/course/model/course.model';
import { Colors } from '../../shared/tokens';

export default function MyCourses() {
  const loadCourse = useSetAtom(loadCourseAtom);
  const { courses, status, errorMessage } = useAtomValue(courseAtom);

  const hasCourse = courses.length > 0;
  const isLoading = status === 'pending';

  const renderCourses = ({ item }: { item: TStudentCourseDescription }) => (
    <View style={styles.course}>
      <CourseCard {...item} />
    </View>
  );

  useEffect(() => {
    loadCourse();
  }, []);

  return (
    <>
      {isLoading && <ActivityIndicator style={styles.activityIndicator} size='large' color={Colors.primary} />}
      {hasCourse && (
        <FlatList
          refreshControl={
            <RefreshControl
              tintColor={Colors.primary}
              titleColor={Colors.primary}
              refreshing={isLoading}
              onRefresh={loadCourse}
            />
          }
          data={courses}
          keyExtractor={({ id }) => id.toString()}
          renderItem={renderCourses}
        />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  course: {
    paddingVertical: 9,
    paddingHorizontal: 30,
  },
  activityIndicator: {
    marginTop: 30,
  },
});
