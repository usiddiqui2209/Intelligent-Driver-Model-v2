export const TIME_STEP = 0.1;
export const MAX_SIMULATION_TIME = Infinity;
export const MAX_ROAD_LENGTH = 1000;
export const VEHICLE_TYPE = {
    VIRTUAL: 'virtual',
    CAR: 'car',
    VAN: 'van',
    TRUCK: 'truck',
    CUSTOM: 'custom'
};
export const BEHAVIOUR_TYPE = {
    IS_SPAWNED: 'isSpawned',
    DESIRED_VELOCITY: 'desiredVelocity',
    SAFE_TIME_HEADWAY: 'safeTimeHeadway',
    MAX_ACCELERATION: 'maxAcceleration',
    DESIRED_DECELERATION: 'desiredDeceleration',
    JAM_DISTANCE: 'jamDistance',
    ACCELERATION_EXPONENT: 'accelerationExponent'
};
export const CANVAS_ID = 'trafficSimulator';
export const CANVAS_WIDTH = 1500;
export const CANVAS_HEIGHT = 100;