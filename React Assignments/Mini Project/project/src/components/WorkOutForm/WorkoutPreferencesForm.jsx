import React, { useState } from "react";
import "./form.css";
import {
  Box,
  Button,
  CircularProgress,
  Grid,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { generateWorkoutPlan } from "../../api/request";
import { Results } from "../Results/Results";

let initalState = {
  age: "",
  gender: "male",
  fitnessLevel: "beginner",
  targetMuscleGroups: [],
  workoutDuration: "",
  specificExercises: [],
};

function WorkoutPreferencesForm() {
  const [formData, setFormData] = useState(initalState);
  const [isLoading, setIsLoading] = useState(false);
  const [plan, setPlan] = useState("");

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;

    if (type === "checkbox") {
      // Handle checkbox inputs (e.g., target muscle groups and specific exercises)
      const arrayName =
        name === "targetMuscleGroups"
          ? "targetMuscleGroups"
          : "specificExercises";
      const updatedArray = checked
        ? [...formData[arrayName], value]
        : formData[arrayName].filter((item) => item !== value);

      setFormData({
        ...formData,
        [arrayName]: updatedArray,
      });
    } else {
      // Handle other input fields
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   // console.log(formData);
  //   setIsLoading(true);
  //   const data = await generateWorkoutPlan(formData);
  //   console.log(data);
  //   setPlan(data);
  //   setIsLoading(false);
  // };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    // Generate a cache key based on formData
    const cacheKey = JSON.stringify(formData);

    // Check if the plan for the same formData is already cached
    const cachedPlan = sessionStorage.getItem(cacheKey);

    if (cachedPlan) {
      // If cached, set the plan from cache and stop loading
      setPlan(JSON.parse(cachedPlan));
      setIsLoading(false);
    } else {
      // If not cached, fetch the plan from the API
      const data = await generateWorkoutPlan(formData);
      setPlan(data);

      // Cache the plan for future use
      sessionStorage.setItem(cacheKey, JSON.stringify(data));

      setIsLoading(false);
    }
  };

  //console.log(process.env.REACT_APP_API_KEY);
  return (
    <Grid
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        alignSelf: "center",
        width: "80vw",
        height: "100%",
        margin: "20px",
        borderRadius: "6px",
        bgcolor: "white",
        paddingBottom: "10px",
      }}
    >
      <h2 className="heading">Workout Preferences and Goals</h2>
      <Box component="form" onSubmit={handleSubmit} className="form">
        <div>
          <label className="label">
            Age:
            <TextField
              size="small"
              label="Age"
              variant="outlined"
              type="number"
              name="age"
              value={formData.age}
              onChange={handleInputChange}
              required
            />
          </label>
        </div>
        <div>
          <label className="label">
            Gender:
            <Select
              size="small"
              className="input"
              name="gender"
              value={formData.gender}
              onChange={handleInputChange}
              required
            >
              <MenuItem value="male">Male</MenuItem>
              <MenuItem value="female">Female</MenuItem>
            </Select>
          </label>
        </div>
        <div>
          <label className="label">
            Fitness Level:
            <Select
              size="small"
              className="input"
              name="fitnessLevel"
              value={formData.fitnessLevel}
              onChange={handleInputChange}
              required
            >
              <MenuItem value="beginner">Beginner</MenuItem>
              <MenuItem value="intermediate">Intermediate</MenuItem>
              <MenuItem value="advanced">Advanced</MenuItem>
            </Select>
          </label>
        </div>
        <div>
          <label className="label">
            Target Muscle Groups:
            <div>
              <label>
                <input
                  type="checkbox"
                  name="targetMuscleGroups"
                  value="chest"
                  checked={formData.targetMuscleGroups.includes("chest")}
                  onChange={handleInputChange}
                />
                Chest
              </label>
              <label>
                <input
                  type="checkbox"
                  name="targetMuscleGroups"
                  value="back"
                  checked={formData.targetMuscleGroups.includes("back")}
                  onChange={handleInputChange}
                />
                Back
              </label>
              {/* Add more muscle group options */}
            </div>
          </label>
        </div>
        <div>
          <label className="label">
            Workout Duration (minutes):
            <TextField
              size="small"
              label="Duration"
              variant="outlined"
              type="number"
              name="workoutDuration"
              onChange={handleInputChange}
              value={formData.workoutDuration}
              required
            />
          </label>
        </div>
        <div>
          <label className="label">
            Specific Exercises:
            <div>
              <label>
                <input
                  type="checkbox"
                  name="specificExercises"
                  value="push-ups"
                  checked={formData.specificExercises.includes("push-ups")}
                  onChange={handleInputChange}
                />
                Push-ups
              </label>
              <label>
                <input
                  type="checkbox"
                  name="specificExercises"
                  value="squats"
                  checked={formData.specificExercises.includes("squats")}
                  onChange={handleInputChange}
                />
                Squats
              </label>
              {/* Add more exercise options */}
            </div>
          </label>
        </div>

        <Button
          type="submit"
          sx={{ alignSelf: "center", mt: "20px", mb: "30px" }}
          variant="contained"
        >
          Submit
        </Button>
      </Box>
      <Grid mt={6}>
        {isLoading ? (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h3>Please wait Loading your Plan</h3>
            <CircularProgress color="secondary" />
          </Box>
        ) : plan ? (
          <Results plan={plan} />
        ) : (
          ""
        )}
      </Grid>
    </Grid>
  );
}

export default WorkoutPreferencesForm;
/* */
