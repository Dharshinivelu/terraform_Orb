resource "azurerm_key_vault" "example" {
  name                        = var.key_vault_name
  location                    = var.resource_group_location
  resource_group_name         = var.resource_group_name
  enabled_for_deployment      = var.enabled_for_deployment
  enabled_for_disk_encryption = var.enabled_for_disk_encryption
  tenant_id                   = var.key_vault_tenant_id
  enabled_for_template_deployment = var.enabled_for_template_deployment
  sku_name = var.key_vault_sku_name


  access_policy {
    tenant_id = var.key_vault_tenant_id
    object_id = var.key_vault_object_id

    secret_permissions = [
      "Get",
      "List",
      "Set",
      "Delete",
      "Backup",
      "Restore",
    ]

    key_permissions = [
      "Get",
      "List",
      "Create",
      "Delete",
      "Backup",
      "Restore",
      "Encrypt",
      "Decrypt",
      "UnwrapKey",
      "WrapKey",
    ]
  }
}

output "key_vault_id" {
  value = azurerm_key_vault.example.id
}