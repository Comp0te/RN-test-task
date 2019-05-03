export const getNewEntitiesAfterSetData = <T extends {id: number}>(
  stateEntities: IEntities<T>,
  entitiesFromAction: T[],
): IEntities<T> => {
  const newEntitiesMap = new Map<string, T>(Object.entries(stateEntities));

  entitiesFromAction.forEach((entity) => newEntitiesMap.set(`${entity.id}`, entity));

  return Array.from(newEntitiesMap.values()).reduce((acc, entity) => {
    return {...acc, [entity.id]: entity};
  }, {});
};
