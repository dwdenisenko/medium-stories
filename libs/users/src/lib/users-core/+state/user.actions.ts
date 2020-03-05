import { createAction, props } from '@ngrx/store';

import { User } from '@medium-stories/entities';
import { ActionErrorPayload, ActionPropsForcePayload, ActionPropsPayload } from '@medium-stories/store';

export const loadUser = createAction('[User] Load User', props<ActionPropsForcePayload>());

export const loadUserCancel = createAction('[User] Load User Cancel');

export const loadUserRun = createAction('[User] Load User Run');

export const loadUserSuccess = createAction('[User] Load User Success', props<ActionPropsPayload<User>>());

export const loadUserFailure = createAction('[User] Load User Failure', props<ActionErrorPayload>());