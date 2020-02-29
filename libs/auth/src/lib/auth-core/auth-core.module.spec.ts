import { async, TestBed } from '@angular/core/testing';
import { AuthCoreModule } from './auth-core.module';

describe('AuthModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AuthCoreModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(AuthCoreModule).toBeDefined();
  });
});
