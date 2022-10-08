import 'vitest-dom/extend-expect';
import { expect } from 'vitest';
import * as domMatchers from 'vitest-dom/matchers';

expect.extend(domMatchers);
