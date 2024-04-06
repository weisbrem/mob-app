import { View, Text, StyleSheet } from 'react-native';
import { IProgress } from '../../model/course.model';
import { Colors, FontFamily, FontSize, LineHeight } from '../../../../shared/tokens';

interface IProgressBarProps {
  progress: IProgress;
}

export function ProgressBar({ progress }: IProgressBarProps) {
  const { progressPercent, tariffLessonsCount, userViewedLessonsCount } = progress;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.progressPercentText}>{progressPercent}%</Text>
        <Text style={styles.totalProgressText}>
          {userViewedLessonsCount}/{tariffLessonsCount}
        </Text>
      </View>
      <View style={styles.progressLine}>
        <View
          style={{
            ...styles.progressPercent,
            width: `${progressPercent}%`,
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    rowGap: 6,
    marginBottom: 18,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  progressPercentText: {
    fontFamily: FontFamily.FiraSans,
    fontSize: FontSize.f16,
    lineHeight: LineHeight.l20,
    fontWeight: '400',
    color: Colors.progressBarBg,
  },
  totalProgressText: {
    fontFamily: FontFamily.FiraSans,
    fontSize: FontSize.f12,
    lineHeight: LineHeight.l20,
    fontWeight: '400',
    color: Colors.grayLight,
  },
  progressLine: {
    height: 4,
    backgroundColor: Colors.progressBarLineBg,
    borderRadius: 20,
  },
  progressPercent: {
    height: 4,
    backgroundColor: Colors.progressBarBg,
    borderRadius: 20,
  },
});
