import * as apiModel from './api/project.api-model';
import * as viewModel from './project.vm';
import { mapProjectFromApiToVm } from './project.mapper';

describe('Test from project.mapper', () => {
  it('should return empty project when it feeds undefined', () => {
    //Arrange
    const project: apiModel.Project = undefined;

    //Act
    const result: viewModel.Project = mapProjectFromApiToVm(project);
    //Assert
    const emptyProyect = {
      id: '',
      name: '',
      externalId: '',
      comments: '',
      isActive: false,
      employees: [],
    };
    expect(result).toEqual(emptyProyect);
  });

  it('should return empty project when it feeds null', () => {
    //Arrange
    const project: apiModel.Project = null;

    //Act
    const result: viewModel.Project = mapProjectFromApiToVm(project);
    //Assert
    const emptyProyect = {
      id: '',
      name: '',
      externalId: '',
      comments: '',
      isActive: false,
      employees: [],
    };
    expect(result).toEqual(emptyProyect);
  });

  it('should return empty project when it feeds empty project', () => {
    //Arrange
    const project: apiModel.Project = {
      id: '',
      name: '',
      externalId: '',
      comments: '',
      isActive: false,
      employees: [],
    };

    //Act
    const result: viewModel.Project = mapProjectFromApiToVm(project);

    //Assert
    const emptyProyect = {
      id: '',
      name: '',
      externalId: '',
      comments: '',
      isActive: false,
      employees: [],
    };
    expect(result).toEqual(emptyProyect);
  });

  it('should return a project, when it has one item', () => {
    //Arrange
    const project: apiModel.Project = {
      id: '1',
      name: 'TestName',
      externalId: '123',
      comments: 'Test comments',
      isActive: true,
      employees: [],
    };

    //Act
    const result: viewModel.Project = mapProjectFromApiToVm(project);

    //Assert
    const expectedResult: viewModel.Project = {
      id: '1',
      name: 'TestName',
      externalId: '123',
      comments: 'Test comments',
      isActive: true,
      employees: [],
    };
    expect(result).toEqual(expectedResult);
  });

  it('should return a project, when it has one project and a employee', () => {
    //Arrange
    const project: apiModel.Project = {
      id: '1',
      name: 'TestName',
      externalId: '123',
      comments: 'Test comments',
      isActive: true,
      employees: [{ id: '007', isAssigned: true, employeeName: 'James' }],
    };

    //Act
    const result: viewModel.Project = mapProjectFromApiToVm(project);

    //Assert
    const expectedResult: viewModel.Project = {
      id: '1',
      name: 'TestName',
      externalId: '123',
      comments: 'Test comments',
      isActive: true,
      employees: [{ id: '007', isAssigned: true, employeeName: 'James' }],
    };
    expect(result).toEqual(expectedResult);
  });
  it('should return a project whitout employees, when it has one project and it feeds null employees', () => {
    //Arrange
    const project: apiModel.Project = {
      id: '1',
      name: 'TestName',
      externalId: '123',
      comments: 'Test comments',
      isActive: true,
      employees: null,
    };

    //Act
    const result: viewModel.Project = mapProjectFromApiToVm(project);

    //Assert
    const expectedResult: viewModel.Project = {
      id: '1',
      name: 'TestName',
      externalId: '123',
      comments: 'Test comments',
      isActive: true,
      employees: [],
    };
    expect(result).toEqual(expectedResult);
  });

  it('should return a project whitout employees, when it has one project and it feeds undefined employees', () => {
    //Arrange
    const project: apiModel.Project = {
      id: '1',
      name: 'TestName',
      externalId: '123',
      comments: 'Test comments',
      isActive: true,
      employees: undefined,
    };

    //Act
    const result: viewModel.Project = mapProjectFromApiToVm(project);

    //Assert
    const expectedResult: viewModel.Project = {
      id: '1',
      name: 'TestName',
      externalId: '123',
      comments: 'Test comments',
      isActive: true,
      employees: [],
    };
    expect(result).toEqual(expectedResult);
  });
});
