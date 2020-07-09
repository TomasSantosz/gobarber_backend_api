import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';
import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import ProviderController from '../controllers/ProviderController';
import ProviderDayController from '../controllers/ProviderDayAvailabilityController';
import ProviderMonthController from '../controllers/ProviderMonthAvailabilityController';

const providerRouter = Router();

const providerController = new ProviderController();
const providerDayController = new ProviderDayController();
const providerMonthController = new ProviderMonthController();

providerRouter.use(ensureAuthenticated);

providerRouter.post('/', providerController.create);

providerRouter.get(
  '/:provider_id/month-availability',
  celebrate({
    [Segments.PARAMS]: {
      provider_id: Joi.string().uuid().required(),
    },
  }),
  providerMonthController.index,
);

providerRouter.get(
  '/:provider_id/day-availability',
  providerDayController.index,
);
export default providerRouter;
