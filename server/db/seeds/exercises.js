
exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('exercises').del()
      .then(function () {
        // Inserts seed entries
        return knex('exercises').insert([
          {
            workout_id: 1,
            name: 'Barbell Bench Press - Medium Grip',
            sets: 4,
            reps: 10,
            img: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/360/Male/200sq/360_1.jpg'
          },
          {
            workout_id: 1,
            name: 'Incline Dumbbell Press',
            sets: 4,
            reps: 10,
            img: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/380/Male/200sq/380_1.jpg'
          },
          {
            workout_id: 1,
            name: 'Pullups',
            sets: 4,
            reps: 10,
            img: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/46/Male/200sq/46_1.jpg'
          },
          {
            workout_id: 1,
            name: 'Seated Cable Rows',
            sets: 4,
            reps: 10,
            img: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/45/Male/200sq/45_1.jpg'
          },
          {
            workout_id: 1,
            name: 'Dumbbell Shoulder Press',
            sets: 3,
            reps: 10,
            img: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/328/Male/200sq/328_1.jpg'
          },
          {
            workout_id: 1,
            name: 'Upright Barbell Row',
            sets: 3,
            reps: 10,
            img: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/365/Male/200sq/365_1.jpg'
          },
          {
            workout_id: 1,
            name: 'Side Lateral Raise',
            sets: 3,
            reps: 10,
            img: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/373/Male/200sq/373_1.jpg'
          },
          {
            workout_id: 1,
            name: 'Lying Triceps Press',
            sets: 3,
            reps: 10,
            img: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/342/Male/200sq/342_1.jpg'
          },
          {
            workout_id: 1,
            name: 'Dumbbell Bicep Curl',
            sets: 3,
            reps: 10,
            img: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/223/Male/200sq/223_1.jpg'
          },
          {
            workout_id: 1,
            name: 'Cable Reverse Crunch',
            sets: 3,
            reps: 10,
            img: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/938/Male/200sq/938_1.jpg'
          },
          // day 2
          {
            workout_id: 2,
            name: 'Barbell Squat',
            sets: 4,
            reps: 10,
            img: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/3861/Male/200sq/3861_1.jpg'
          },
          {
            workout_id: 2,
            name: 'Seated Leg Curl',
            sets: 4,
            reps: 10,
            img: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/69/Male/200sq/69_1.jpg'
          },
          {
            workout_id: 2,
            name: 'Power Clean from Blocks',
            sets: 3,
            reps: 10,
            img: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/748/Male/200sq/748_1.jpg'
          },
          {
            workout_id: 2,
            name: 'Barbell Step Ups',
            sets: 3,
            reps: 10,
            img: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/62/Male/200sq/62_1.jpg'
          },
          {
            workout_id: 2,
            name: 'Barbell Lunge',
            sets: 2,
            reps: 15,
            img: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/41/Male/200sq/41_1.jpg'
          },
          {
            workout_id: 2,
            name: 'Standing Calf Raises',
            sets: 2,
            reps: 20,
            img: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/48/Male/200sq/48_1.jpg'
          },
          {
            workout_id: 2,
            name: 'Hyperextensions (Back Extensions)',
            sets: 3,
            reps: 10,
            img: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/47/Male/200sq/47_1.jpg'
          },
          {
            workout_id: 2,
            name: 'Reverse Crunch',
            sets: 3,
            reps: 40,
            img: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/119/Male/200sq/119_1.jpg'
          },
          // day 4
          {
            workout_id: 3,
            name: 'Barbell Incline Bench Press Medium-Grip',
            sets: 4,
            reps: 10,
            img: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/3311/Male/200sq/3311_1.jpg'
          },
          {
            workout_id: 3,
            name: 'Dumbbell Bench Press',
            sets: 4,
            reps: 10,
            img: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/1/Male/200sq/1_1.jpg'
          },
          {
            workout_id: 3,
            name: 'Wide-Grip Lat Pulldown',
            sets: 4,
            reps: 10,
            img: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/10/Male/200sq/10_1.jpg'
          },
          {
            workout_id: 3,
            name: 'Bent Over Two-Dumbbell Row',
            sets: 3,
            reps: 10,
            img: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/16/Male/200sq/16_1.jpg'
          },
          {
            workout_id: 3,
            name: 'Machine Shoulder (Military) Press',
            sets: 3,
            reps: 10,
            img: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/74/Male/200sq/74_1.jpg'
          },
          {
            workout_id: 3,
            name: 'Barbell Shrug',
            sets: 3,
            reps: 10,
            img: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/97/Male/200sq/97_1.jpg'
          },
          {
            workout_id: 3,
            name: 'Bench Dips',
            sets: 3,
            reps: 10,
            img: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/344/Male/200sq/344_1.jpg'
          },
          {
            workout_id: 3,
            name: 'Close-Grip EZ Bar Curl',
            sets: 3,
            reps: 10,
            img: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/238/Male/200sq/238_1.jpg'
          },
          {
            workout_id: 3,
            name: 'Concentration Curls',
            sets: 2,
            reps: 10,
            img: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/136/Male/200sq/136_1.jpg'
          },
          {
            workout_id: 3,
            name: 'Kneeling Cable Crunch With Alternating Oblique Twists',
            sets: 3,
            reps: 40,
            img: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/937/Male/200sq/937_1.jpg'
          },
          // day 5
          {
            workout_id: 4,
            name: 'Leg Press',
            sets: 4,
            reps: 10,
            img: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/119/Male/200sq/119_1.jpg'
          },
          {
            workout_id: 4,
            name: 'Seated Leg Curl',
            sets: 4,
            reps: 10,
            img: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/119/Male/200sq/119_1.jpg'
          },
          {
            workout_id: 4,
            name: 'Power Clean from Blocks',
            sets: 4,
            reps: 6,
            img: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/119/Male/200sq/119_1.jpg'
          },
          {
            workout_id: 4,
            name: 'Dumbbell Lunges',
            sets: 4,
            reps: 10,
            img: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/119/Male/200sq/119_1.jpg'
          },
          {
            workout_id: 4,
            name: 'Standing Calf Raises',
            sets: 3,
            reps: 15,
            img: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/119/Male/200sq/119_1.jpg'
          },
          {
            workout_id: 4,
            name: 'Hyperextensions (Back Extensions)',
            sets: 3,
            reps: 10,
            img: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/119/Male/200sq/119_1.jpg'
          },
          {
            workout_id: 4,
            name: 'Ab Crunch Machine',
            sets: 3,
            reps: 40,
            img: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/119/Male/200sq/119_1.jpg'
          },
        ]);
      });
  };
  