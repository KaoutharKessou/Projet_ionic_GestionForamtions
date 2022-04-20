import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RecapMyInscriptionsPage } from './recap-my-inscriptions.page';

describe('RecapMyInscriptionsPage', () => {
  let component: RecapMyInscriptionsPage;
  let fixture: ComponentFixture<RecapMyInscriptionsPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RecapMyInscriptionsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RecapMyInscriptionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
